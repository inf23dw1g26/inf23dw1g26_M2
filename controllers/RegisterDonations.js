'use strict';

var utils = require('../utils/writer.js');
var RegisterDonations = require('../service/RegisterDonationsService');

module.exports.createDonation = function createDonation (req, res, next, body) {
  RegisterDonations.createDonation(body)
    .then(RegisterAnimal.retrieveAnAnimal)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDonation = function deleteDonation (req, res, next, id) {
  RegisterDonations.deleteDonation(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveADonation = function retrieveADonation (req, res, next, id) {
  RegisterDonations.retrieveADonation(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDonation = function retrieveDonation (req, res, next) {
  RegisterDonations.retrieveDonation()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDonation = function updateDonation (req, res, next, body, id) {
  RegisterDonations.updateDonation(body, id)
    .then(RegisterAnimal.retrieveAnAnimal)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
