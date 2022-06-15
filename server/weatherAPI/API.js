import axios from "axios";

export default axios.create({
  baseURL: "http://api.weatherapi.com/v1/current.json",
  headers: {
    key: "ee239af2577343258d4105145221506",
  },
});
