var express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var mainRoute = require('./router');
app.use('/mathAPI', mainRoute);

app.listen(port, ()=>{
    console.log(`App is lstening at the port: ${port}`);
});