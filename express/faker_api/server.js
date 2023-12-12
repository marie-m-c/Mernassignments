const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express()
const port = 8000

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
      };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            zipCode: faker.address.zipCode(),
          }
    };
    return newCompany;
}

app.get('/api/users/new', (req, res) => {
    res.json({user: createUser()});
});

app.get('/api/companies/new', (req, res) => {
    res.json({company: createCompany()});
});

app.get('/api/user/company', (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));