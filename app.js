const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello worlds");
})

app.post('/login', (req, res) => {
    // Extract request body
    const requestBody = req.body;

    // Send back the request body as response
    res.json(requestBody);
})

app.get('/user', (req, res) => {
    res.send("Welcome");
})

app.get('/schemes', (req, res) => {
    res.send("schemes");
})

app.get('/retailers', (req, res) => {
    res.send("retailers");
})


app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);