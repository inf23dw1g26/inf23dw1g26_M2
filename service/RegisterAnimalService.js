'use strict';


/**
 * Delete an animal
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteAnAnimal = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Register an animal
 *
 * body Animal  (optional)
 * returns Animal
 **/
exports.registerAnimal = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idAnimal" : 0,
  "typeAnimal" : "typeAnimal",
  "name" : "name",
  "description" : "description",
  "age" : 6,
  "breed" : "breed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrive an animal
 *
 * id Long 
 * returns Animal
 **/
exports.retrieveAnAnimal = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idAnimal" : 0,
  "typeAnimal" : "typeAnimal",
  "name" : "name",
  "description" : "description",
  "age" : 6,
  "breed" : "breed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all animals
 *
 * returns List
 **/
exports.retrieveAnimals = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idAnimal" : 0,
  "typeAnimal" : "typeAnimal",
  "name" : "name",
  "description" : "description",
  "age" : 6,
  "breed" : "breed"
}, {
  "idAnimal" : 0,
  "typeAnimal" : "typeAnimal",
  "name" : "name",
  "description" : "description",
  "age" : 6,
  "breed" : "breed"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an animal
 *
 * body Animal 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAnAnimal = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

