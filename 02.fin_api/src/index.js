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
    const id = uuidv4();

    const { cpf, name } = request.body;

    customers.push({
        id,
        cpf,
        name,
        statement: []
    });

    return response.status(201).send();
});

app.listen(3333);