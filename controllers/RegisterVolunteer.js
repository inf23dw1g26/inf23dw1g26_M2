'use strict';

var utils = require('../utils/writer.js');
var RegisterVolunteer = require('../service/RegisterVolunteerService');

module.exports.createVolunteer = function createVolunteer (req, res, next, body) {
  RegisterVolunteer.createVolunteer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteVolunteer = function deleteVolunteer (req, res, next, id) {
  RegisterVolunteer.deleteVolunteer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAVolunteer = function retrieveAVolunteer (req, res, next, id) {
  RegisterVolunteer.retrieveAVolunteer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveVolunteer = function retrieveVolunteer (req, res, next) {
  RegisterVolunteer.retrieveVolunteer()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateVolunteer = function updateVolunteer (req, res, next, body, id) {
  RegisterVolunteer.updateVolunteer(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
