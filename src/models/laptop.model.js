'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Laptop = function(laptop){
  this.name     = laptop.name;
  this.price         = laptop.price;
  this.status         = laptop.status ? laptop.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Laptop.create = function (newLap, result) {
dbConn.query("INSERT INTO laptop set ?", newLap, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Laptop.findById = function (id, result) {
dbConn.query("Select * from laptop where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Laptop.findAll = function (result) {
dbConn.query("Select * from laptop", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('laptop : ', res);
  result(null, res);
}
});
};
Laptop.update = function(id, laptop, result){
dbConn.query("UPDATE laptop SET name=?,price=? WHERE id = ?", [laptop.name,laptop.price, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Laptop.delete = function(id, result){
dbConn.query("DELETE FROM laptop WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Laptop;