
describe('Progress Bars Demo', () => {
  beforeEach(() => {
    cy.server();
    // cy.route('GET', '**/bars').as('getBarsInfo');

    cy.visit('http://localhost:3000/progress-bars-demo');

    // cy.wait('@getBarsInfo');
  });

  it('should display Progress Bars', () => {
    cy.get('[data-cy=progressBars]').as('progressBars');
    cy.get('@progressBars').should('exist');

    cy.get('@progressBars').contains('Click to select a bar').should('exist');
  });
});
