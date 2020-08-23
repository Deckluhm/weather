import Axios from "axios";
import getUnit from "@/helpers/get-unit.ts";

const OPEN_WEATHER_API_KEY = process.env.VUE_APP_OPEN_WEATHER_API_KEY;
const OPEN_WEATHER_API_VERSION = process.env.VUE_APP_OPEN_WEATHER_API_VERSION;

const instance = Axios.create({
  baseURL: `https://api.openweathermap.org/data/${OPEN_WEATHER_API_VERSION}/`
});

export default {
  fetch(path: string, params: object) {
    const units: { [key: string]: string } = {
      celsius: "metric",
      fahrenheit: "imperial"
    };
    const unit = getUnit();

    return instance.get(path, {
      params: {
        appid: OPEN_WEATHER_API_KEY,
        units: units[unit],
        ...params
      }
    });
  }
};
