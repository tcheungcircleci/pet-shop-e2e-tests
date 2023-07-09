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

Cypress.Commands.add('openLoginPopuModal', () => { 
    cy.contains('LOGIN ').click();
});

Cypress.Commands.add('generateRandomUser', (): Cypress.Chainable<any> => {
    return cy.wrap({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        address: faker.location.streetAddress({ useFullAddress: true }) + ' ' + faker.location.country(),
        phoneNumber: faker.phone.number('+### ## ### ####'),
        is_marketing: true
    });
});

Cypress.Commands.add('getElement', (locator: string) => { 
    cy.get(`${locator}`);
});

Cypress.Commands.add('signUp', (inputFieldlocator, signUpbuttonLocator , user) => { 
    cy.contains('Sign up').click();
    cy.getElement(inputFieldlocator).eq(0).type(user.firstName);
    cy.getElement(inputFieldlocator).eq(1).type(user.lastName);
    cy.getElement(inputFieldlocator).eq(2).type(user.email);
    cy.getElement(inputFieldlocator).eq(3).type(user.phoneNumber);
    cy.getElement(inputFieldlocator).eq(4).type(user.address);
    cy.getElement(inputFieldlocator).eq(5).type(user.password);
    cy.getElement(inputFieldlocator).eq(6).type(user.password);
    cy.getElement(inputFieldlocator).eq(7).check();
    cy.get(signUpbuttonLocator).contains('SIGN UP').click();
});

/*Cypress.Commands.add('signUp', (user) => { 
    cy.contains('Sign up').click();
    cy.get('.login__form input').eq(0).type(user.firstName);
    cy.get('.login__form input').eq(1).type(user.lastName);
    cy.get('.login__form input').eq(2).type(user.email);
    cy.get('.login__form input').eq(3).type(user.phoneNumber);
    cy.get('.login__form input').eq(4).type(user.address);
    cy.get('.login__form input').eq(5).type(user.password);
    cy.get('.login__form input').eq(6).type(user.password);
    cy.get('.login__form input').eq(7).check();
    cy.get('.login__form > .v-btn').contains('SIGN UP').click();
});*/

