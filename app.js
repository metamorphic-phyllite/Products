//REQUIREMENTS
const app = require('express')();
const models = require('./models/stuff.js'); // destructure
const connection = require('./db/connection.js');
const port =

//MIDDLEWARE


//GET REQUEST


//POST REQUEST



app.use(express.static(__dirname + '/../client'));

//LISTENING
app.listen(port, () => {
  console.log('lets do thissss')
})