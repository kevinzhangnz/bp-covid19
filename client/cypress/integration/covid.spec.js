/// <reference types="cypress" />

context('Covid', () => {
  it('should load global summary', () => {
    cy.visit('/')
    cy.get('[data-cy=menu_covid]').click()
    cy.get('[data-cy=loader]').should('be.visible')
    cy.url().should('include', '/covid')
    cy.get('[data-cy=global_title]').should('be.visible')
    cy.get('[data-cy=global]').first().should('be.visible')
  })

  it('should load country summary when typing', () => {
    cy.get('[data-cy=search]').should('be.visible').type('New Zealand{enter}')
    cy.get('[data-cy=country_title]').should('be.visible').contains('New Zealand')
    cy.get('[data-cy=country]').first().should('be.visible')
  })

  it('should load country summary when selecting', () => {
    cy.get('[data-cy=search]').should('be.visible').click().get('.ng-option:last').click()
    cy.get('[data-cy=country_title]').should('be.visible')
    cy.get('[data-cy=country]').first().should('be.visible')
  })

  it('should load Tonga without data', () => {
    cy.get('[data-cy=search]').type('Tonga').get('.ng-option:first').click()
    cy.get('[data-cy=country_title]').should('be.visible').contains('Tonga')
    cy.get('[data-cy=nodata]').should('be.visible').contains('No Data Available!')
  })

  it('should clear country summary', () => {
    cy.get('[data-cy=search]').get('.ng-clear-wrapper').click()
    cy.get('[data-cy=country_title]').should('not.be.visible')
    cy.get('[data-cy=nodata]').should('not.be.visible')
  })
})
