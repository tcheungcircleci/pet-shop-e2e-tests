import { faker } from '@faker-js/faker';

interface RandomUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
    is_marketing: boolean
};

Cypress.Commands.add('navigateTo', (url: string) => { 
    cy.visit(url);
});

Cypress.Commands.add('openLoginPopupModal', () => { 
    cy.contains('LOGIN ').click();
});

Cypress.Commands.add('generateRandomUser', (): Cypress.Chainable<any> => {
    let password: string = faker.internet.password();
    return cy.wrap({
        "first_name": faker.person.firstName(),
        "last_name": faker.person.lastName(),
        "email": faker.internet.email(),
        "password": password,
        "address": faker.location.streetAddress({ useFullAddress: true }) + ' ' + faker.location.country(),
        "phone_number": faker.phone.number('+### ## ### ####'),
        "password_confirmation": password,
        "is_marketing": true
    });
});

Cypress.Commands.add('getElement', (locator: string) => { 
    cy.get(`${locator}`, {timeout: 5000});
});

Cypress.Commands.add('signUp', (inputFieldlocator, signUpbuttonLocator , user) => { 
    cy.contains('Sign up').click();
    cy.getElement(inputFieldlocator).eq(0).type(user.first_name);
    cy.getElement(inputFieldlocator).eq(1).type(user.last_name);
    cy.getElement(inputFieldlocator).eq(2).type(user.email);
    cy.getElement(inputFieldlocator).eq(3).type(user.phone_number);
    cy.getElement(inputFieldlocator).eq(4).type(user.address);
    cy.getElement(inputFieldlocator).eq(5).type(user.password);
    cy.getElement(inputFieldlocator).eq(6).type(user.password_confirmation);
    cy.getElement(inputFieldlocator).eq(7).check();
    cy.get(signUpbuttonLocator).contains('SIGN UP').click();
});

Cypress.Commands.add('loginAdminUI', (inputFieldlocator, loginbuttonLocator, email, password) => { 
    cy.getElement(inputFieldlocator).eq(0).type(email);
    cy.getElement(inputFieldlocator).eq(1).type(password);
    cy.getElement(loginbuttonLocator).click();
});

Cypress.Commands.add('addCustomer', (inputFieldlocator, addCustomerBtnLocator, customer) => { 
    cy.getElement(inputFieldlocator).eq(0).type(customer.first_name);
    cy.getElement(inputFieldlocator).eq(1).type(customer.last_name);
    cy.getElement(inputFieldlocator).eq(2).type(customer.email);
    cy.getElement(inputFieldlocator).eq(3).type(customer.phone_number);
    cy.getElement(inputFieldlocator).eq(4).type(customer.address);
    cy.getElement(inputFieldlocator).eq(5).type(customer.password);
    cy.getElement(inputFieldlocator).eq(6).type(customer.password_confirmation); 
    cy.contains(addCustomerBtnLocator).click();
    cy.get('.mdi-close').click();
});

Cypress.Commands.add('createUser', (user) => {
    return cy
        .request(
            {
                method: 'POST',
                url: '/api/v1/user/create',
                body: user,
                failOnStatusCode: false,
            }
        )
        .then(cy.wrap);
});

Cypress.Commands.add('loginAdminAPI', (user) => {
    return cy
        .request(
            {
                method: 'POST',
                url: '/api/v1/admin/login',
                body: user,
                failOnStatusCode: false,
            }
        )
        .then(cy.wrap);
});
