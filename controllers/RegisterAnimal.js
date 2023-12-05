'use strict';

var utils = require('../utils/writer.js');
var RegisterAnimal = require('../service/RegisterAnimalService');

module.exports.deleteAnAnimal = function deleteAnAnimal (req, res, next, id) {
  RegisterAnimal.deleteAnAnimal(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerAnimal = function registerAnimal (req, res, next, body) {
  RegisterAnimal.registerAnimal(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAnAnimal = function retrieveAnAnimal (req, res, next, id) {
  RegisterAnimal.retrieveAnAnimal(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAnimals = function retrieveAnimals (req, res, next) {
  RegisterAnimal.retrieveAnimals()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAnAnimal = function updateAnAnimal (req, res, next, body, id) {
  RegisterAnimal.updateAnAnimal(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
