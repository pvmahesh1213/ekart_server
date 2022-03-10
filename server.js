const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./connection_db/index.js');
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }))



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // accept all data formates.

app.use((req, res, next) => {
    req.connection = connection;
    next();                           // to access connection in 'req' in entaire application.
});

app.get('/', function (req, res) {
    res.send('Hello world');
    res.end();
});

// routing
const router = require('./routes');
app.use("/api", router.signup);

app.listen(5000, function () {
    console.log('server started at port 5000');
})
