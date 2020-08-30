describe("Settings", () => {
  it("Visit the settings page", () => {
    cy.visit("/settings");

    cy.get("h5").should("contain", "Unit");
    cy.get("button")
      .should("contain", "Celsius")
      .should("contain", "°C");
  });

  it("Change temperature unit", () => {
    cy.visit("/settings");

    cy.get("button")
      .click()
      .should(() => {
        expect(localStorage.getItem("unit")).to.equal("fahrenheit");
      });
  });
});
