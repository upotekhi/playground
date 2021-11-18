Cypress.Commands.add("login", (e, p) => {
  return cy
    .request({
      method: "POST",
      url: "http://localhost:8080/api/users/login",
      body: { user: { email: e, password: p } },
    })
    .then((response) => {
      window.localStorage.setItem("jwtToken", response.body.user.token);
    });
});
