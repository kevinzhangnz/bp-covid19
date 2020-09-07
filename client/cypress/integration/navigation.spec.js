/// <reference types="cypress" />

context('Navigation', () => {
  it('should navigate to Home page', () => {
    cy.visit('/')
    cy.get('[data-cy=menu_covid]').click()
    cy.get('[data-cy=menu_home]').click()
    cy.url().should('include', '/')
  })

  it('should navigate to Covid page', () => {
    cy.get('[data-cy=menu_covid]').click()
    cy.url().should('include', '/covid')
  })
})
