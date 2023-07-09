describe("/api/v1/user/create' endpoint", () => {
    it("should create a user", () => {
        cy.generateRandomUser().then((randomUser) => { 
            const user = randomUser;
            console.log(user);
            cy.createUser(user).should((response) => {
                expect(response.status).to.equal(200);
                expect(response.headers['content-type']).to.equal('application/json');
                expect(response.body).to.be.an("object");

                expect(response.body).to.have.property('success');
                expect(response.body.success).to.be.a('number');
                expect(response.body.success).to.eq(1);

                expect(response.body).to.have.property('data');

                expect(response.body.data).to.have.property('uuid');
                expect(response.body.data.uuid).to.be.a('string');

                expect(response.body.data).to.have.property('first_name');
                expect(response.body.data.first_name).to.be.a("string");
                expect(response.body.data.first_name).to.eq(user.first_name);

                expect(response.body.data).to.have.property('last_name');
                expect(response.body.data.last_name).to.be.a('string');
                expect(response.body.data.last_name).to.eq(user.last_name);

                expect(response.body.data).to.have.property('email');
                expect(response.body.data.email).to.be.a('string');
                expect(response.body.data.email).to.eq(user.email);

                expect(response.body.data).to.have.property('avatar');
                expect(response.body.data.avatar).to.be.a('null');
                expect(response.body.data.avatar).to.eq(null);

                expect(response.body.data).to.have.property('address');
                expect(response.body.data.address).to.be.a('string');
                expect(response.body.data.address).to.eq(user.address);

                expect(response.body.data).to.have.property('phone_number');
                expect(response.body.data.phone_number).to.be.a('string');
                expect(response.body.data.phone_number).to.eq(user.phone_number);

                expect(response.body.error).to.be.an(null);
                expect(response.body).to.have.property('errors');
                expect(response.body.errors).to.be.an('array');
                expect(response.body).to.have.property('extra');
                expect(response.body.extra).to.be.an('array');
            });
        });
    });
});
