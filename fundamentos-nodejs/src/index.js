const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json(["curso 1", "curso 2", "curso 3"]);
});

app.post("/courses", (request, response) => {
    return response.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
});

app.put("/courses/:id", (request, response) => {
    return response.json(["curso 6", "curso 2", "curso 3", "curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["curso 6", "curso 7", "curso 3", "curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["curso 6", "curso 7", "curso 4"]);
});

app.listen(3333);