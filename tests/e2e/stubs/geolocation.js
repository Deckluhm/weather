export default (
  window,
  coords = { latitude: 45.75917, longitude: 4.82966 }
) => {
  cy.stub(window.navigator.permissions, "query").returns({
    state: "granted"
  });

  cy.stub(window.navigator.geolocation, "getCurrentPosition").callsFake(cb =>
    cb({ coords })
  );
};
