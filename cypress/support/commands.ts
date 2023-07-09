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
    cy.get(`${locator}`);
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

Cypress.Commands.add('createUser', (user) => {
    return cy
        .request(
            {
                method: 'POST',
                url: "/api/v1/user/create",
                body: user,
                failOnStatusCode: false,
            }
        )
        .then(cy.wrap);
});
