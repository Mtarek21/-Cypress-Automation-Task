describe('template spec', () => {
  
  before(() => {
    cy.visit('https://automationexercise.com/');
  })
  
beforeEach(() =>  {

  cy.log('Visiting the Page ... ');
});
  
  it('passes', () => {
    cy.visit('https://automationexercise.com/');
  cy.title().should('eq' , 'Automation Exercise');
  cy.contains(' Signup / Login').click();
  cy.get('h2').should('contain', 'New User Signup!');
  cy.fixture('example.json').then((user) => {
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('h2').should('contain', 'Enter Account Information');
    cy.get('[data-qa="name"]').should('value', user.name);
    cy.get('[data-qa="email"]').should('value', user.email);
    cy.get('[data-qa="email"]').should('be.disabled')
    cy.get('#id_gender1').check().should('be.checked');
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select('6');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('1997');
    cy.get('#newsletter').check().should('be.checked');
    cy.get('[data-qa="first_name"]').type(user.firstname);
    cy.get('[data-qa="last_name"]').type(user.lastname);
    cy.get('[data-qa="address"]').type(user.address);
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.number);
    cy.get('[data-qa="create-account"]').click();
    cy.get('h2').should('contain', 'Account Created!');
    cy.get('[data-qa="continue-button"]').click();
    cy.get('b').should('contain', user.name);
    cy.contains(' Logout').click();
    cy.get('h2').should('contain', 'Login to your account');
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
    cy.get('b').should('contain', user.name);





  })

     });
    

  afterEach(() =>  {

    cy.log('test complete ');
  });


  after(() =>  {

    cy.log('All tests complete ');
  });
})