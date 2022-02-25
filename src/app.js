//essentially going to be server file

const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

//express allows us to create an application.. entire project
//lives within this application

const app = express(); //function from express library and creates application
//works as container with functionality, detailed at expressjs.com

app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`))); 
//generic function, allows setting up of things within it
//anytime there is request to /assets, run function

//express.static is file hosting function, pass path to client folder
//grab everything that exists in that folder 
//then creates GET request handlers for them

//want response to be as small as possible (compressed, faster to send data)

app.use(compression()); //compression library augments express and compresses data

app.use(bodyParser.urlencoded({extended: true}));
//anytime post request comes into the body
//with key1=value&key2=value...

//add (to request) an element called body that = key1:value, key2:value ---> request.body
//extended:true --> if something comes in as another type (normally parsed as string)
//does not put numerics into strings, keeps it as the same type. 100 would = 100, not '100'

app.use(favicon(`${__dirname}/../client/img/favicon.png`)); //look for favicon requests (google chrome)

//all of these are added libraries(plugins) to express 


//want for app to be "one-time setup"
router(app); //after all urls are configured

app.listen(port, (err) => { //callback function
    if(err){throw err; }
    console.log(`Listening on port ${port}`);
});

