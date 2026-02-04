import express from "express";
import { ENV } from "./config/ENV.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { functions, inngest } from "./config/inngest.js";

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});

app.listen(ENV.PORT, () => {
  connectDB();
  console.log("Server is up and running");
});

// https://expo-ecommerce-a559.onrender.com/
