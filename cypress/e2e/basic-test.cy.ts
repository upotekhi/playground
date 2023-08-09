// basic test for CRA app with Cypress

describe("basic test", () => {
  it("loads", () => {
    cy.visit("/");
    cy.get("p").should("contain", "Edit src/App.tsx and save to reload.");
  });
});
