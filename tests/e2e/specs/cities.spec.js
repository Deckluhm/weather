describe("Cities", () => {
  it("Visit the cities page", () => {
    cy.visit("/cities");

    cy.get("#current-location").should("contain", "Current location");
  });
});
