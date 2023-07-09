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

declare namespace Cypress {
    interface Chainable<Subject = any> {
        loginAdminUI(inputFieldlocator, loginbuttonLocator, email, password): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        addCustomer(inputFieldlocator, signUpbuttonLocator, customer): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        createUser(user): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        loginAdminAPI(user): Chainable<any>;
    }
}
