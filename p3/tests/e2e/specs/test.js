// https://docs.cypress.io/api/introduction/api.html

describe('All Tests For All Features', () => {
  it('has text on the homepage', () => {
    cy.visit('/')
    cy.contains('p', 'This is a blog about my two super cute baby cats: Euclid (Eucii) and Jupiter (Doopider). I adopted them when they were kittens, but they\'ve grown up so fast. They are almost 2 years old now! Read the blog to find out what they\'re up to every day. :) ')
  })
  it('has 5 images on the homepage', () => {
    cy.visit('/')
    cy.get('img').should('have.length', 5)
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
})
