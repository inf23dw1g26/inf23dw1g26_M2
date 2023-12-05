'use strict';


/**
 * Create an adoption
 *
 * body Adoption  (optional)
 * returns Adoption
 **/
exports.createAdoption = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idAnimal" : 0,
  "idVoluntario" : 1,
  "address" : "address",
  "idPerson" : 6,
  "name" : "name",
  "description" : "description"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an adoption
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteAdoption = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve an adoption
 *
 * id Long 
 * returns Adoption
 **/
exports.retrieveAdoptions = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idAnimal" : 0,
  "idVoluntario" : 1,
  "address" : "address",
  "idPerson" : 6,
  "name" : "name",
  "description" : "description"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all adoptions
 *
 * returns List
 **/
exports.retrieveAllAdoptions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idAnimal" : 0,
  "idVoluntario" : 1,
  "address" : "address",
  "idPerson" : 6,
  "name" : "name",
  "description" : "description"
}, {
  "idAnimal" : 0,
  "idVoluntario" : 1,
  "address" : "address",
  "idPerson" : 6,
  "name" : "name",
  "description" : "description"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an adoption
 *
 * body Adoption 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAdoption = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

