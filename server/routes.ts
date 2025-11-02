import express, { type Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

// ⚙️ Helper for dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Example API route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Serve React build files
  const publicPath = path.join(__dirname, "../dist/public");
  app.use(express.static(publicPath));

  // Catch-all route (for React Router)
  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });

  const httpServer = createServer(app);
  return httpServer;
}
