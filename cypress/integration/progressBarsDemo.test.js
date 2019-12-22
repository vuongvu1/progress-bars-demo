
// TODO: This e2e test is not complete,
// it should run and handle several actions like clicking buttons and observe progress bars change
// However, there is a problem with Cypress and window.fetch:
// Cypress suggested an action here:
// https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch#readme
// But in doesn't seem to work in this case, need to look and update in the future

describe('Progress Bars Demo', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '**/bars').as('getBarsInfo');

    cy.visit('http://localhost:3000/progress-bars-demo');

    // cy.wait('@getBarsInfo');
  });

  it('should display Progress Bars', () => {
    cy.get('[data-cy=progressBars]').as('progressBars');
    cy.get('@progressBars').should('exist');

    cy.get('@progressBars').contains('Click to select a bar').should('exist');
  });
});
