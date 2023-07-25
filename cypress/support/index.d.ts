declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Navigate to a URL or endpoint
         * 
         * @param url is the URL to visit
         * 
         * @example
         * cy.navigateTo('https://www.example.com')
         * cy.navigateTo('/')
         */
        navigateTo(url: string): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Opens the Login popup modal
         * 
         * @example
         * cy.openLoginPopupModal()
         * 
         */
        openLoginPopupModal(): Chainable<any>;
    }
  }

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Generate a random user and then returns the generated random user as an object
         * 
         * @example
         * cy.generateRandomUser();
         */
        generateRandomUser(): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * The `signUp` command requires three parameters to sign a user up to the Pet-Shop Customer app.
         * @param inputFieldlocator sign up form elements locators
         * @param signUpbuttonLocator sign up form submit button
         * @param user data of the user to be signed up
         * 
         * @example
         * cy.signUp('.login__form input', '.login__form > .v-btn', generatedRandomUser);
         */
        signUp(inputFieldlocator, signUpbuttonLocator,  user): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Requires to provide a web element selector to get or select that element
         * @param locator a string that refers to the web element selector
         * @example 
         * cy.getElement('.login__form input')
         */
        getElement(locator: string): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * The `loginAdminUI` command requires 3 parameters shown below to log the user into the Pet-Shop Admin app.
         * @param inputFieldlocator a string refering to the login form input fields,
         * @param loginbuttonLocator a string refering to the login form LOGIN button,
         * @param email Email on the Pet-Shop Admin app,
         * @param password Password on the Pet-Shop Admin app.
         * 
         * @example
         * cy.loginAdminUI('.login__form input', '.login__form > .v-btn', 'admin@example.com', 'Admin@Password')
         */
        loginAdminUI(inputFieldlocator, loginbuttonLocator, email, password): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * This command requires the parameters shown below to add a new customer via the Pet-Shop Admin app.
         * @param inputFieldlocator Input field locators on the Add New Customer popup modal
         * @param addCustomerBtnLocator Add New Customer button locator on the Add New Customer popup modal
         * @param customer the data of the new customer to be added
         * 
         * @example
         * cy.addCustomer('.customer-card .v-field__input', 'Add new customer', randomlyGeneratedNewCustomer)
         */
        addCustomer(inputFieldlocator, addCustomerBtnLocator, customer): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * This command is to send a POST API request to create a user on the Pet-Shop CustomerApp.
         * It requires one parameter which is the body of the request
         * @param user The details of the user to be created
         * 
         * @example
         * cy.createUser(randomlyGeneratedUser)
         */
        createUser(user): Chainable<any>;
    }
}

declare namespace Cypress {
    interface Chainable<Subject = any> {
       /**
        * This command is to send a POST API request to log into the Pet-Shop AdminApp via API.
         * It requires one parameter which is the body of the request
        * @param user is the Admin user credentials to be used to log into the Pet-Shop AdminApp
        * 
        * @example
        * cy.loginAdminAPI(adminUserLoginCredentials)
        */
        loginAdminAPI(user): Chainable<any>;
    }
}
