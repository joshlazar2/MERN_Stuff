const express = require("express"); // this means import express, a function is returned back when we import(require) and we assign that function to the variable express
const app = express();
const { faker } = require("@faker-js/faker");
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.database.mongodbObjectId()
    }
}

app.get('/user', (req, res) => {
    const newUser = createUser();
    res.json(newUser)
    console.log(newUser);
})


const createCompany = () => {
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


app.get('/company', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany)
    console.log(newCompany);
})


app.get('/user/company', (req, res) => {
    const newUserAndCompany = [createUser(), createCompany()];
    res.json(newUserAndCompany)
    console.log(newUserAndCompany);
})














app.listen( port, () => console.log(`Listening on port: ${port}`) );