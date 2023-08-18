/// <reference types="cypress" />

describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')

    const a: number = 1;
	console.log("A: ",a);
  })
})
