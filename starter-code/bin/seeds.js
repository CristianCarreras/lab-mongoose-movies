//Iteration #1

const mongoose = require('mongoose');

require ('../config/db.config.js');

const Celebrity = require ('../models/celebrity.model.js');

const celebrity = [
  {
  name: 'Terminator',
  occupation: 'Actor' ,
  catchPhrase: 'Ill be back',
  },
  {
  name: 'John Rambo',
  occupation: 'Soldier' ,
  catchPhrase: 'I dont feel my legs',
  },
  {
  name: 'Elvis Presley',
  occupation: 'Singer' ,
  catchPhrase: 'I am alive!',
  },
  {
  name: 'Batman',
  occupation: 'Darknight' ,
  catchPhrase: 'Have a nice stay at Arkam Asylum',
  },
  {
  name: 'E.T',
  occupation: 'Unknown' ,
  catchPhrase: 'Mi caaaaasa',
  },
];

Product.create(products).then((docs) => {
  docs.forEach((product) => {
    console.log(product.name);
  });

  mongoose.connection.close();
});
