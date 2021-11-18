/// <reference types="cypress" />

describe("Sign in page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Basic login test", () => {
    cy.get("[data-cy=email]").type(Cypress.env("email"));
    cy.get("[data-cy=password]").type(Cypress.env("password"));
    cy.get("[data-cy=submit]").click();

    cy.get("[data-cy=profile]").should("have.text", " test.user ");
  });
});
