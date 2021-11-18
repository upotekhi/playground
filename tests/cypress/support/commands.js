Cypress.Commands.add("login", (e, p) => {
  return cy
    .request({
      method: "POST",
      url: "http://localhost:8080/api/users/login",
      body: { user: { email: e, password: p } },
    })
    .then((resp) => {
      window.localStorage.setItem("jwtToken", resp.body.user.token);
    });
});

Cypress.Commands.add("deleteArticle", () => {
  return cy.location("pathname").then((resp) => {
    const slug = resp.slice(8);
    const token = window.localStorage.getItem("jwtToken");

    cy.request({
      method: "DELETE",
      url: `http://localhost:8080/api/articles${slug}`,
      headers: {
        authorization: `Token ${token}`,
      },
    });
  });
});
