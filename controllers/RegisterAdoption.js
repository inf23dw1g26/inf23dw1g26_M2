'use strict';

var utils = require('../utils/writer.js');
var sql = require('../utils/db.js')
var RegisterAdoption = require('../service/RegisterAdoptionService');

module.exports.createAdoption = function createAdoption (req, res, next, body) {
  RegisterAdoption.createAdoption(body)
    .then(RegisterAdoption.retrieveAdoptions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdoption = function deleteAdoption (req, res, next, id) {
  RegisterAdoption.deleteAdoption(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAdoptions = function retrieveAdoptions (req, res, next, id) {
  RegisterAdoption.retrieveAdoptions(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAllAdoptions = function retrieveAllAdoptions (req, res, next) {
  RegisterAdoption.retrieveAllAdoptions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdoption = function updateAdoption (req, res, next, body, id) {
  RegisterAdoption.updateAdoption(body, id)
    .then (RegisterAdoption.retrieveAdoptions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
