import { getGreeting } from '../support/app.po';

describe('songs', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file

    cy.get('h6').should('contain', 'Welcome to songs!');
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome songs');
  });
});
