describe('Test Login and check if app is running', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.url().then(($url) => {
      if ($url.includes('please')) {
        cy.log('Yes');
        cy.get('#username').type('theonlyhebi@gmail.com');
        cy.get('#password').type('test123');
        cy.get('#kc-login').click();

        cy.title().should('eq', 'lacksemployment-eventmanager');

        cy.end();
      } else {
        cy.log('Logged in ');

        cy.title().should('eq', 'lacksemployment-eventmanager');
        cy.end();
      }
    });
  });
});
