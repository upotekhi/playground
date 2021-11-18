/// <reference types="cypress" />

describe("New Article page", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit("/editor");
  });

  it("Publish Article test", () => {
    cy.url().should("include", "/editor");
  });
});
