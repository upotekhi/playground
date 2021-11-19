import * as faker from "faker";
const title = faker.lorem.words();
const description = faker.lorem.sentence();
const body = faker.lorem.paragraph();
let token = "empty";

describe("Existing Article page", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password")).then((resp) => {
      token = resp.body.user.token;
    });
  });

  it("Article can be deleted with banner button", () => {
    cy.createArticle(title, description, body, token).then((resp) => {
      const slug = resp.body.article.slug;

      cy.visit(`/article/${slug}`);
      cy.get("[data-cy=delete-banner]").click();
      cy.visit(`/article/${slug}`);
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });
  });

  it("Article can be deleted with page button", () => {
    cy.createArticle(title, description, body, token).then((resp) => {
      const slug = resp.body.article.slug;

      cy.visit(`/article/${slug}`);
      cy.get("[data-cy=delete-page]").click();
      cy.visit(`/article/${slug}`);
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });
  });
});
