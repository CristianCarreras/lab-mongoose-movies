const mongoose = require ('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/movie', {useMongoClient: true});
