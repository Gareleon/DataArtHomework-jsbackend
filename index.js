// Replace import statements with require
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/config/db.js");
const { errorHandler } = require("./src/middleware/errorHandler.js");
const { Message } = require("./src/public/index.js");

const app = express();
const port = process.env.PORT || 5000;

// CORS Middleware, whitelist origins
const allowedOrigins = [
  "https://data-art-homework-frontend.vercel.app",
  "https://data-art-homework-backend.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"), "Not allowed by CORS");
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Middleware for parsing JSON
app.use(express.json());

// Routes
const jokeRoutes = require("./src/routes/jokeRoutes.js");
app.use("/api/joke", jokeRoutes);

// Root route - Serve HTML
app.get("/", (req, res) => {
  res.send(Message); // Serve HTML on homepage
});

// Global Error Handling Middleware
app.use(errorHandler);

// Connect to MongoDB & Start Server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
