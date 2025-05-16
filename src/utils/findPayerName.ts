import levenshtein from "js-levenshtein";
import fs from "fs";
import path from "path";
import { PayerData } from "../interfaces/types";

const filePath = path.join(__dirname, "../data/payers.json");
const data: PayerData[] = JSON.parse(fs.readFileSync(filePath, "utf-8")).items;

/**
 * Finds the best matching payer data based on the provided query string.
 * @param query - The name of the payer to search for
 * @returns Returns the best matching payer data or null if no match is found
 */
export function findPayerByName(query: string): null | PayerData {
  let bestMatch = null;
  let lowestDistance = Infinity;

  data.forEach((item) => {
    // Combine payer's display name, aliases and names for comparison
    const payerNames = [item.displayName, ...item.aliases, ...item.names];

    payerNames.forEach((payerName) => {
      const distance = levenshtein(
        query.toLowerCase(),
        payerName.toLowerCase()
      );
      if (distance < lowestDistance) {
        lowestDistance = distance;
        bestMatch = item;
      }
    });
  });

  return bestMatch;
}

/**
 * Finds the best matching payer data based on the provided query string.
 * @param query - The name of the payer to search for
 * @returns Returns an array of the top 4 closest matching payer data or an empty array if no match is found
 */
export function findPayersByName(query: string, count: number): PayerData[] {
  const results: { payer: PayerData; distance: number }[] = [];

  data.forEach((item) => {
    // Combine payer's display name, aliases, and names for comparison
    const payerNames = [item.displayName, ...item.aliases, ...item.names];

    payerNames.forEach((payerName) => {
      const distance = levenshtein(
        query.toLowerCase(),
        payerName.toLowerCase()
      );
      results.push({ payer: item, distance });
    });
  });

  // Sort the results by Levenshtein distance (ascending) and return the top 4 matches
  results.sort((a, b) => a.distance - b.distance);

  // Return the top 4 closest matches
  return results.slice(0, count > 1 ? count : 1).map((result) => result.payer);
}
