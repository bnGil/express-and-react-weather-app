import express from "express";
import path from "path";
import cors from "cors";
import url from "url";

import API from "./weatherAPI/API.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));
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
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
