'use strict';


/**
 * Create volunteer
 *
 * body Volunteer  (optional)
 * returns Volunteer
 **/
exports.createVolunteer = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO volunteer (name, anoInicioVolunteering, phoneNumber, adress) Values(?,?,?,?)", [body.name, body.anoInicioVolunteering, body.phoneNumber, body.address], function (err,res){
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
 * Delete a volunteer
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteVolunteer = function(idVolunteer) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM volunteer WHERE idVolunteer = ?", [idVolunteer], function(err,res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted":idVolunteer});
      }
    });
  });
}


/**
 * Retrieve a volunteer
 *
 * id Long 
 * returns Volunteer
 **/
exports.retrieveAVolunteer = function(idVolunteer) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM volunteer WHERE idVolunteer = ?", [idVolunteer], function(err,res){
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
 * Retrieve all volunteers
 *
 * returns List
 **/
exports.retrieveVolunteer = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM volunteer", function (err,res){
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
 * Update a volunteer
 *
 * body Volunteer 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateVolunteer = function(body,idVolunteer) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE adoption set name = ?, anoInicioVolunteering = ?, phoneNumber = ?, WHERE adress = ?, WHERE idVolunteer = ?", [body.name, body.anoInicioVolunteering, body.phoneNumber, address, idVolunteer], function (err,res){
      if (err){
        console.log(err);
        reject(err);

      }
      else {
        console.log(res);
        resolve(idVolunteer);
      }
    });
  });
}

