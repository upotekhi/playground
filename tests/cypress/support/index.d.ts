/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.login()
     */
    login(e: string, p: string): Chainable<any>;
    /**
     * Creates one Todo using UI
     * @example
     * cy.deleteArticle()
     */
    deleteArticle(): Chainable<any>;
    /**
     * Creates one Todo using UI
     * @example
     * cy.createArticle()
     */
    createArticle(
      title: string,
      description: string,
      body: string,
      token: string
    ): Chainable<any>;
  }
}
