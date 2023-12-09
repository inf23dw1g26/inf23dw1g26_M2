'use strict';

var sql = require('../utils/db.js');
/**
 * Delete an animal
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteAnAnimal = function(idAnimal) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM animais WHERE idAnimal = ?", [idAnimal], function (err,res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted":idAnimal});
      }
    });
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
    console.log(body);
    sql.query("INSERT INTO animais (name, age, typeAnimal, breed, description) Values(?,?,?,?,?)", [body.name, body.age, body.typeAnimal, body.breed, body.description], function (err,res){
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
  
    }


/**
 * Retrive an animal
 *
 * id Long 
 * returns Animal
 **/
exports.retrieveAnAnimal = function(idAnimal) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM animais WHERE idAnimal = ?", [id], function(err,res){
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
});
}

/**
 * Retrieve all animals
 *
 * returns List
 **/
exports.retrieveAnimals = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM animais", function (err,res){
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res);
      }
      });
    });
  }


/**
 * Update an animal
 *
 * body Animal 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAnAnimal = function(body,idAnimal) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE animais set name = ?, age = ?, typeAnimal = ?, WHERE breed = ?, WHERE description = ?, WHERE idAnimal = ?", [body.name, body.age, body.typeAnimal, body.breed, body.description, idAnimal], function (err,res){
      if (err){
        console.log(err);
        reject(err);

      }
      else {
        console.log(res);
        resolve(idAnimal);
      }
    });
  });
}

