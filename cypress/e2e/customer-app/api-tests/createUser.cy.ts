describe('"/api/v1/user/create" endpoint', () => {
    it("should create a user", () => {
        cy.generateRandomUser().then((randomUser) => { 
            const user = randomUser;
            cy.createUser(user).should((response) => {
                expect(response.status).to.equal(200);
                expect(response.headers['content-type']).to.equal('application/json');
                expect(response.body).to.be.an("object");

                expect(response.body).to.have.property('success');
                expect(response.body.success).to.be.a('number');
                expect(response.body.success).to.eq(1);
            });
        });
    });
});
