import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

import API from "./weatherAPI/API.js";

const fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);

const publicPath = path.join(__dirname, "../client/build");

const app = express();

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/weather/:location", async (req, res) => {
  try {
    const location = req.params.location;
    const { data } = await API.get("", { params: { q: location } });
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
