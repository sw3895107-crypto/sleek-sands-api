import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Render");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    token: "dev-token",
    user: {
      id: 1,
      email,
      role: "admin"
    }
  });
});

app.listen(10000, () => {
  console.log("API running on port 10000");
});
