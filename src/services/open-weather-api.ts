import Axios from "axios";

const OPEN_WEATHER_API_KEY = process.env.VUE_APP_OPEN_WEATHER_API_KEY;
const OPEN_WEATHER_API_VERSION = process.env.VUE_APP_OPEN_WEATHER_API_VERSION;

const instance = Axios.create({
  baseURL: `http://api.openweathermap.org/data/${OPEN_WEATHER_API_VERSION}/`
});

export default {
  fetch(path: string, params: object) {
    return instance.get(path, {
      params: {
        appid: OPEN_WEATHER_API_KEY,
        units: "metric",
        ...params
      }
    });
  }
};
