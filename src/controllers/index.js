//where things get handleds

const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';
//just going to store this in memory for the moment


const hostIndex = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
  //every response has a .sendFile function, give it path to handle and send that back
  //cache things in memory and holds on to them to update
};

const hostPage1 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

const hostPage2 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};

const notFound = (req, res) =>{ //by default, status is 200 (success)
  return res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
  //chain together functions
}

const getName = (req, res) => {
  return res.json({name});
}

const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname){
    //if missing one of the names, then return error msg
    return res.status(400).json({
      error: 'firstname and lastname are both required',
      id: 'setNameMissingParams'
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json(name); //without return, eslint throws error
  //branching if statement must have a return and conditional return
}


module.exports ={
  page1: hostPage1,
  page2: hostPage2,
  index: hostIndex,
  notFound,
  getName,
  setName,
}