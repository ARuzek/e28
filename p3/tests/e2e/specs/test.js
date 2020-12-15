// https://docs.cypress.io/api/introduction/api.html

describe('All Tests For All Features', () => {
  it('has text on the homepage', () => {
    cy.visit('/')
    cy.contains('p', 'This is a blog about my two super cute baby cats: Euclid (Eucii) and Jupiter (Doopider). I adopted them when they were kittens, but they\'ve grown up so fast. They are almost 2 years old now! Read the blog to find out what they\'re up to every day. :) ')
  })
  it('has at least 5 images on the homepage', () => {
    cy.visit('/')
    cy.get('img').should('have.length.at.least', 5)
  })
  it('has images that link to posts', () => {
    cy.visit('/')
    cy.get('[href="/posts/1"]').click()
    cy.url().should('include', '/posts/1') 
  })
  it('has 2 links on the homepage', () => {
    cy.visit('/')
    cy.get('a').should('have.length', 2)
  })
  it('has login link that links to login page', () => {
    cy.visit('/')
    cy.get('[href="/login"]').click()
    cy.url().should('include', '/login') 
  })
  it('has text on the post page', () => {
    cy.visit('/posts/1')
    cy.contains('.post-title', 'Eucii\'s Big Run')
  })
  it('has an image on the post page', () => {
    cy.visit('/posts/1')
    cy.get('img').should('have.length', 1)
  })
  it('has a button on the post page if not logged in', () => {
    cy.visit('/posts/1')
    cy.contains('div > a', 'Login to View Comments')  
  })
  it('can successfully log in', () => {
    cy.visit('/login')
    cy.get('[data-test="email-input"]').type('amelia.ruzek.klein@gmail.com')
    cy.get('[data-test="password-input"]').type('12345678')  
    cy.get('[data-test="login-button"]').click()
    cy.contains('p', ' You\'ve successfully logged in! Visit the home page to read about cats or write your own post about your cats. ')
  })
  it('can successfully register', () => {
    cy.visit('/login')
    cy.get('[data-test="register-name-input"]').clear().type('Someone')
    cy.get('[data-test="register-email-input"]').clear().type('email@email.com')
    cy.get('[data-test="register-password-input"]').clear().type('12345678')  
    cy.get('[data-test="register-button"]').click()
    //I'm not sure why this test doesn't work. 
  })
  it('can detect issue with registration', () => {
    cy.visit('/login')
    cy.get('[data-test="register-name-input"]').type('S')
    cy.get('[data-test="register-button"]').click()
    cy.contains('.error', 'The email field is required. ')
  })
  it('has comment section post page after login', () => {
    cy.login()
    cy.visit('/posts/1')
    cy.contains('h2', 'Write a Comment ')
    //I'm not sure why this test doesn't work. 
  })
  it('has text on create new post page after login', () => {
    cy.login()
    cy.visit('/posts/new')
    cy.contains('h2', 'Add More Stories About Your Cats ')
    //I'm not sure why this test doesn't work. 
  })
})
