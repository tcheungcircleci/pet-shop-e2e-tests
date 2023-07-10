describe('Add Customer via PetShop-AdminApp', () => {
    beforeEach(() => {
        cy.navigateTo('/login');
        cy.fixture('locators.json').then((locators) => { 
            cy.loginAdminUI(locators.adminLoginField, locators.adminLoginBtn, 
                'admin@buckhill.co.uk', 'admin'
            );
        });
        cy.contains('LOGOUT').should('be.visible');
    });

    it('should allow to add a new customer', () => {
        cy.contains('Customers').click();
        cy.contains(' add new customer ').click();
        cy.generateRandomUser().then((randomUser) => {
            const user = randomUser;
            cy.fixture('locators.json').then((locators) => { 
                cy.addCustomer(locators.adminNewCustomerFields, locators.adminAddCustomerBtn, user);
            });
        });
    });
});
