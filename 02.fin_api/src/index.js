const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

/**
 * id - uuid
 * cpf - string
 * name - string
 * statement - []
 */
app.post("/account", (request, response) => {  
    const { cpf, name } = request.body;

    const customerAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    );

    if (customerAlreadyExists) {
        response.status(400).json({ "error": "Customer already exists!" });
    }

    customers.push({
        id: uuidv4(),
        cpf,
        name,
        statement: []
    });

    return response.status(201).send();
});

app.listen(3333);