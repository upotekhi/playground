/// <reference types="cypress" />

describe("Sign in page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Basic login test", () => {
    cy.get("[data-cy=email]").type("test@test.com");
    cy.get("[data-cy=password]").type("0DlX17x1"); // TO DO: secure the password
    cy.get("[data-cy=submit]").click();

    cy.get("[data-cy=profile]").should("have.text", " test.user ");
  });
});
