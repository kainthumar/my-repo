'use strict';
var dbConn = require('./../../config/db.config');

var Order = function(order){
this.laptop_id = order.laptop_id;
this.customer_name = order.customer_name;
this.quantity = order.quantity;
this.total_price = order.total_price;
this.order_date = new Date();
this.status = order.status ? order.status : 1;
this.created_at = new Date();
this.updated_at = new Date();
};

Order.create = function (newOrder, result) {
dbConn.query("INSERT INTO orders set ?", newOrder, function (err, res) {
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

Order.findById = function (id, result) {
dbConn.query("SELECT * FROM orders WHERE id = ? ", id, function (err, res) {
if(err) {
console.log("error: ", err);
result(err, null);
}
else{
result(null, res);
}
});
};

Order.findAll = function (result) {
dbConn.query("SELECT * FROM orders", function (err, res) {
if(err) {
console.log("error: ", err);
result(null, err);
}
else{
console.log('orders : ', res);
result(null, res);
}
});
};

Order.update = function(id, order, result){
dbConn.query("UPDATE orders SET laptop_id=?, customer_name=?, quantity=?, total_price=?, status=? WHERE id = ?",
[order.laptop_id, order.customer_name, order.quantity, order.total_price, order.status, id],
function (err, res) {
if(err) {
console.log("error: ", err);
result(null, err);
}else{
result(null, res);
}
});
};

Order.delete = function(id, result){
dbConn.query("DELETE FROM orders WHERE id = ?", [id], function (err, res) {
if(err) {
console.log("error: ", err);
result(null, err);
}
else{
result(null, res);
}
});
};

module.exports= Order