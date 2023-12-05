'use strict';


/**
 * Create a donation
 *
 * body Donations  (optional)
 * returns Donations
 **/
exports.createDonation = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idPerson" : 6,
  "quantity" : 1,
  "type" : "type",
  "idDonation" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a donation
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteDonation = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a donation
 *
 * id Long 
 * returns Donations
 **/
exports.retrieveADonation = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idPerson" : 6,
  "quantity" : 1,
  "type" : "type",
  "idDonation" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all donations
 *
 * returns List
 **/
exports.retrieveDonation = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idPerson" : 6,
  "quantity" : 1,
  "type" : "type",
  "idDonation" : 0
}, {
  "idPerson" : 6,
  "quantity" : 1,
  "type" : "type",
  "idDonation" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a donation
 *
 * body Donations 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateDonation = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

