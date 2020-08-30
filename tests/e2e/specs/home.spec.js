import stubGeolocation from "../stubs/geolocation";
import stubOpenWeatherAPI from "../stubs/open-weather-api";
import forecastData from "../fixtures/forecast.json";

describe("Home", () => {
  it("Visit the homepage", () => {
    const timeout = 10000;

    stubOpenWeatherAPI();
    cy.visit("/", { onBeforeLoad: window => stubGeolocation(window) });

    cy.get("#today", { timeout })
      .should("contain", "25")
      .should("contain", "°C");
    cy.get("#forecast", { timeout })
      .get(".day")
      .each((day, index) => {
        const nextDayIndex = index + 1;
        const {
          temp: { min, max }
        } = forecastData.daily[nextDayIndex];

        cy.wrap(day)
          .should(
            "contain",
            Cypress.moment()
              .add(nextDayIndex, "days")
              .format("dddd")
          )
          .should("contain", min)
          .should("contain", max);
      });
  });
});
