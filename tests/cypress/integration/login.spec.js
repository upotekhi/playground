/// <reference types="cypress" />

describe("Sign in page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Basic login positive test", () => {
    cy.get("[data-cy=email]").type(Cypress.env("email"));
    cy.get("[data-cy=password]").type(Cypress.env("password"));
    cy.get("[data-cy=submit]").click();

    cy.get("[data-cy=profile]").should("have.text", " test.user ");
  });

  it("Basic login negative test without email", () => {
    cy.get("[data-cy=password]").type(Cypress.env("password"));

    cy.get("[data-cy=submit]").should("be.disabled");
  });

  it("Basic login negative test without password", () => {
    cy.get("[data-cy=email]").type(Cypress.env("email"));

    cy.get("[data-cy=submit]").should("be.disabled");
  });
});
