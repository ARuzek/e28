// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// https://on.cypress.io/custom-commands

// User
let user = {
    name: 'Jill Harvard',
    email: 'jill@harvard.edu',
    password: 'asdfasdf'
}

Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('[data-test=email-input]').clear().type(user.email);
    cy.get('[data-test=password-input]').clear().type(user.password);
    cy.get('[data-test=login-button]').click();
})