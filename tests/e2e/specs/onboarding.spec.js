import stubGeolocation from "../stubs/geolocation";

describe("Onboarding", () => {
  it("Visit the onboarding page", () => {
    cy.visit("/onboarding");

    cy.get("h1").should("contain", "Weather Please");
  });

  it("Should redirect to homepage if geolocation enabled", () => {
    cy.visit("/onboarding", {
      onBeforeLoad: window => stubGeolocation(window)
    });

    cy.location("pathname").should("equal", "/");
  });
});
