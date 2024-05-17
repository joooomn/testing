Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[name="user-name"]').type(standard_user);
    cy.get('[name="password"]').type(secret_sauce);
    cy.get('[name="login-button"]').click();
  });
  