
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const routes = require('./server/routes/api.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', routes(router));
app.get('*', (req, res) => {
    return res.status(404).send("Invalid request");
});

app.listen("3040", () => {
    console.log(`Server now listening at localhost:3040`);
});

module.exports = app;