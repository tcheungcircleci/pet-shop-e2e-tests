declare namespace Cypress {
    interface Chainable<Subject = any> {
        navigateTo(url: string): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        openLoginPopuModal(): Chainable<any>;
    }
  }

declare namespace Cypress {
    interface Chainable<Subject = any> {
        generateRandomUser(): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        signUp(inputFieldlocator, signUpbuttonLocator,  user): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        getElement(locator: string): Chainable<any>;
    }
}
