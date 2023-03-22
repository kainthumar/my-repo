'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Customer = function(customer){
  this.first_name     = customer.first_name;
  this.last_name      = customer.last_name;
  this.email          = customer.email;
  this.phone          = customer.phone;
  this.organization   = customer.organization;
  this.designation    = customer.designation;
  this.salary         = customer.salary;
  this.status         = customer.status ? customer.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Customer.create = function (newCus, result) {
dbConn.query("INSERT INTO employees set ?", newCus, function (err, res) {
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
Customer.findById = function (id, result) {
dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Customer.findAll = function (result) {
dbConn.query("Select * from employees", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('employees : ', res);
  result(null, res);
}
});
};
Customer.update = function(id, customer, result){
dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [customer.first_name,customer.last_name,customer.email,customer.phone,customer.organization,customer.designation,customer.salary, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Customer.delete = function(id, result){
dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Customer;