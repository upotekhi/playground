interface Articles {
  slug?: string;
  title?: string;
  description?: string;
  tagList?: any;
  favoritesCount?: string;
}
let articles: Articles = {};

describe("Home page", () => {
  before(() => {
    cy.fixture("articles").then((resp) => {
      articles = resp.articles[0];
    });
    cy.intercept(
      "GET",
      "http://localhost:8080/api/articles?limit=10&offset=0",
      { fixture: "articles" }
    );
  });

  it("Basic test", () => {
    cy.visit("/");

    cy.get("[data-cy=link]")
      .should("have.attr", "href")
      .and("include", articles.slug);
    cy.get("[data-cy=title]").should("have.text", articles.title);
    cy.get("[data-cy=description]").should("have.text", articles.description);
    cy.get("[data-cy=tags] > li").then((resp) => {
      assert(resp[0].innerText == articles.tagList[0], "first tag is correct");
      assert(resp[1].innerText == articles.tagList[1], "second tag is correct");
    });
    cy.get("[data-cy=favorite]").should(
      "have.text",
      ` ${articles.favoritesCount} `
    );
  });
});
