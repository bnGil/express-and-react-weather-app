import axios from "axios";
const url =
  process.env.NODE_ENV === "production"
    ? "/weather"
    : "http://localhost:5000/weather";
export default axios.create({
  baseURL: url,
});
