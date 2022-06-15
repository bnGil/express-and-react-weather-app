import axios from "axios";
const url =
  process.env.NODE_ENV === "production"
    ? "https://git.heroku.com/lit-wave-86071.git/weather"
    : "http://localhost:5000/weather";
export default axios.create({
  baseURL: url,
});
