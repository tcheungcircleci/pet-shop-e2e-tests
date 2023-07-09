describe('"/api/v1/admin/login" endpoint', () => {
    it("should create a user", () => {
        const adminCredentials = {
            "email": Cypress.env('adminEmail'),
            "password": Cypress.env('adminPassword')
        };
        
        cy.loginAdmin(adminCredentials).should((response) => {
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.equal('application/json');
            expect(response.body).to.be.an("object");

            expect(response.body).to.have.property('success');
            expect(response.body.success).to.be.a('number');
            expect(response.body.success).to.eq(1);

            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('object');
        });
    });
});
