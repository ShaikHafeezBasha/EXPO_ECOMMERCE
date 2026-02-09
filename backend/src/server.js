import express from "express";
import { ENV } from "./config/ENV.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { functions, inngest } from "./config/inngest.js";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/admin",adminRoutes)
app.use("/api/user",userRoutes)

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});

const startServer = async () => {
  await connectDB();
  app.listen(ENV.PORT, () => {
    console.log("Server is up and running");
  });
};

startServer();

// https://expo-ecommerce-a559.onrender.com/
