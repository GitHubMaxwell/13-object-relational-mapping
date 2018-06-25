'use strict';
/* the old lab way
require('babel-register');

require('dotenv').config();

require('./src/app.js').start(process.env.PORT);
*/

//pulling in dependencies (code youre taking form outside)
// starting server
// establish a data connection with the storage. mongoose stuff
//dotenv keeps storage stuff invisble to the user

//requiring in 
require('dotenv').config();

//require in babel register to transpile our code for older browser
require('babel-register');

// require in mongoose
const mongoose= require('mongoose');

// connectecing mongoose to your mongo DB URI
mongoose.connect(process.env.MONGODB_URI);
//running mongodb and then nodemon index.js will let you work directly with the database through the server but wont allow the api.tests to work because the beforeAll app.start and afterAll app.close are sipping this part where it connects
//this is where MOCKGOOSE comes into play making a mock connection to mongo and mongoose to let you make and test queries

// mongoose.connect(process.env.MONGODB_URI).catch(err => console.error(err)); 
// attach a catch on it to handle errors to see whats going on

//requiring in our express app
const app = require('./src/app.js');

//starting our server
app.start(process.env.PORT);