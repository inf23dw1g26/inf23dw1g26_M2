'use strict';

var sql = require('../utils/db.js');
/**
 * Create an adoption
 *
 * body Adoption  (optional)
 * returns Adoption
 **/
exports.createAdoption = function(body) {
  return new Promise(function(resolve, reject) {
  console.log(body);
  sql.query("INSERT INTO adoption (name, adress, description) Values(?,?,?)", [body.name, body.description, body.description], function (err,res){
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
 * Delete an adoption
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteAdoption = function(idAdoption) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM adoption WHERE idAdoption = ?", [idAdoption], function(err,res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted":idAdoption});
      }
    });
  });
}


/**
 * Retrieve an adoption
 *
 * id Long 
 * returns Adoption
 **/
exports.retrieveAdoptions = function(idAdoption) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM adoption WHERE idAdoption = ?", [id], function(err,res){
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
 * Retrieve all adoptions
 *
 * returns List
 **/
exports.retrieveAllAdoptions = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM adoption", function (err,res){
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
 * Update an adoption
 *
 * body Adoption 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAdoption = function(body,idAdoption) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE adoption set name = ?, adress = ?, description = ? WHERE idAdoption = ?", [body.name, body.adress, body.description, idAdoption], function (err,res){
      if (err){
        console.log(err);
        reject(err);

      }
      else {
        console.log(res);
        resolve(idAdoption);
      }
    });
  });
}

