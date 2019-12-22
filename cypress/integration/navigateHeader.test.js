
describe('Header', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('http://localhost:3000/');
  });

  it('should navigate between routes', () => {
    cy.get('[data-cy=header]').as('header');
    cy.contains('This is Home Page').should('exist');

    cy.get('@header').contains('Progress Bars Demo').click();
    cy.location('pathname').should('contain', '/progress-bars-demo');

    cy.get('@header').contains('Error Page').click();
    cy.contains('Page Not Found').should('exist');
  });
});
