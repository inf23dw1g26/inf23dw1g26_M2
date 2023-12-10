'use strict';

var sql = require('../utils/db.js');
/**
 * Create a donation
 *
 * body Donations  (optional)
 * returns Donations
 **/
exports.createDonation = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO donations (idDonation, idPerson, type, quantity) Values(?,?,?,?)", [body.idDonation, body.idPerson, body.type, body.quantity], function (err,res){
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
 * Delete a donation
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteDonation = function(idDonation) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM donations WHERE  idDonation= ?", [idDonation], function(err,res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted":idDonation});
      }
    });
  });
}


/**
 * Retrieve a donation
 *
 * id Long 
 * returns Donations
 **/
exports.retrieveADonation = function(idDonation) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM donations WHERE idDonation = ?", [idDonation], function(err,res){
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
 * Retrieve all donations
 *
 * returns List
 **/
exports.retrieveDonation = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM donations", function (err,res){
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
 * Update a donation
 *
 * body Donations 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateDonation = function(body,idDonation) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE donations set idPerson = ?, type = ?, quantity = ? WHERE idDonation = ?", [body.idPerson, body.type, body.quantity, idDonation], function (err,res){
      if (err){
        console.log(err);
        reject(err);

      }
      else {
        console.log(res);
        resolve(idDonation);
      }
    });
  });
}

