/// <reference types="cypress" />
const faker = require("faker");
const title = faker.lorem.words();
const description = faker.lorem.sentence();
const body = faker.lorem.paragraph();

describe("New Article page", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit("/editor");
  });

  it("Publish Article test", () => {
    cy.get("[data-cy=title]").type(title);
    cy.get("[data-cy=description]").type(description);
    cy.get("[data-cy=body]").type(body);
    cy.get("[data-cy=submit]").click();

    cy.get("h1").should("have.text", title);
    cy.get("[data-cy=body] > p").should("have.text", body);

    cy.deleteArticle();
  });
});
