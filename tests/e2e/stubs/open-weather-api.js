import weatherData from "../fixtures/weather.json";
import forecastData from "../fixtures/forecast.json";

export default () => {
  cy.server();
  cy.route({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?*",
    response: weatherData
  });
  cy.route({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/onecall?*",
    response: forecastData
  });
};
