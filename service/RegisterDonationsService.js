'use strict';


/**
 * Create a donation
 *
 * body Donations  (optional)
 * returns Donations
 **/
exports.createDonation = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO donations (idPerson, type, quantity) Values(?,?,?)", [body.idPerson, body.type, body.quantity], function (err,res){
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
exports.deleteDonation = function(idDonations) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM donations WHERE  idDonations= ?", [idDonations], function(err,res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted":idDonations});
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
exports.retrieveADonation = function(idDonations) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM donations WHERE idDonations = ?", [idDonations], function(err,res){
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
exports.updateDonation = function(body,idDonations) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE adoption set idPerson = ?, type = ?, quantity = ? WHERE idDonations = ?", [body.idPerson, body.type, body.quantity, idDonations], function (err,res){
      if (err){
        console.log(err);
        reject(err);

      }
      else {
        console.log(res);
        resolve(idDonations);
      }
    });
  });
}

