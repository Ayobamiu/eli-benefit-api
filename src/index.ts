import express from "express";
import eligibilityRoutes from "./routes/eligibility";
import findPayerRoutes from "./routes/findPayer";

const app = express();
app.use(express.json());

app.use("/api/eligibility", eligibilityRoutes);
app.use("/api/find-payer", findPayerRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
