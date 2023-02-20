const express = require('express');
const app = express();
const env_port = require('./env')

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var mainRoute = require('./router');
app.use('/mathAPI', mainRoute);

const port = process.env.port || env_port
app.listen(port, ()=>{
    console.log(`App is lstening at the port: ${port}`);
});