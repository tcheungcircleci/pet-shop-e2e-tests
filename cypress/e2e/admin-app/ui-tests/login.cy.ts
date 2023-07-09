
const loginErrorMessage = '.login__error-message';
const expectedMessage = 'Failed to authenticate user';


describe('Login to PetShop-AdminApp', () => {
    beforeEach(() => {
        cy.navigateTo('/login');
    });

    it('should allow login with valid credentials', () => {
        cy.fixture('locators.json').then((locators) => { 
            cy.login(locators.adminLoginField, locators.adminLoginBtn, 
                Cypress.env('adminEmail'), Cypress.env('adminPassword') 
            );
        });
        cy.contains('LOGOUT').should('be.visible');
    });

    it('should block logging in with invalid credentials', () => {
        cy.fixture('locators.json').then((locators) => { 
            cy.fixture('loginData.json').then((loginCredential) => { 
                cy.login(locators.adminLoginField, locators.adminLoginBtn, 
                    loginCredential.wrongEmail, loginCredential.wrongPassword
                );
                cy.get(loginErrorMessage).should('contain.text', expectedMessage);
            });
        });
    });

    it('should not allow logging in with invalid email', () => {
        cy.fixture('locators.json').then((locators) => { 
            cy.fixture('loginData.json').then((loginCredential) => { 
                cy.login(locators.adminLoginField, locators.adminLoginBtn, 
                    loginCredential.wrongEmail, Cypress.env('adminPassword') 
                );
                cy.get(loginErrorMessage).should('contain.text', expectedMessage);
            });
        });
       
    });

    it('should block logging in with invalid password', () => {
        cy.fixture('locators.json').then((locators) => { 
            cy.fixture('loginData.json').then((loginCredential) => { 
                cy.login(locators.adminLoginField, locators.adminLoginBtn, 
                    Cypress.env('adminEmail'), loginCredential.wrongPassword
                );
                cy.get(loginErrorMessage).should('contain.text', expectedMessage);
            });
        });
    });
});
