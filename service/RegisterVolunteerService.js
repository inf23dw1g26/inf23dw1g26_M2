'use strict';


/**
 * Create volunteer
 *
 * body Volunteer  (optional)
 * returns Volunteer
 **/
exports.createVolunteer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phoneNumber" : 1,
  "address" : "address",
  "idVolunteer" : 0,
  "name" : "name",
  "anoInicioVolunteering" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a volunteer
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteVolunteer = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a volunteer
 *
 * id Long 
 * returns Volunteer
 **/
exports.retrieveAVolunteer = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phoneNumber" : 1,
  "address" : "address",
  "idVolunteer" : 0,
  "name" : "name",
  "anoInicioVolunteering" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all volunteers
 *
 * returns List
 **/
exports.retrieveVolunteer = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "phoneNumber" : 1,
  "address" : "address",
  "idVolunteer" : 0,
  "name" : "name",
  "anoInicioVolunteering" : 6
}, {
  "phoneNumber" : 1,
  "address" : "address",
  "idVolunteer" : 0,
  "name" : "name",
  "anoInicioVolunteering" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a volunteer
 *
 * body Volunteer 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateVolunteer = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

