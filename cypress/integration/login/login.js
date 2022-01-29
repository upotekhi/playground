import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User is at the login page", () => {
  cy.visit("/demo.html");
});

When(
  "User enters username as {string} and password as {string}",
  (username, password) => {
    cy.get("body > form > input[type=text]:nth-child(2)").type(username);
    cy.get("body > form > input[type=password]:nth-child(5)").type(password);
  }
);

And("User clicks on login button", () => {
  cy.get("body > form > input[type=submit]:nth-child(7)").click();
});

// Then("User is able to successfully login to the Website", () => {
//   cy.on("url:changed", (url) => {
//     cy.get("h1").should("be.visible", { timeout: 10000 });
//   });
// });
