'use strict';
const Order = require('../models/order.model');
exports.findAll = function(req, res) {
Order.findAll(function(err, orders) {
console.log('controller');
if (err) {
res.send(err);
}
console.log('res', orders);
res.send(orders);
});
};
exports.create = function(req, res) {
const new_order = new Order(req.body);
//handles null error
if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
res.status(400).send({ error:true, message: 'Please provide all required fields' });
} else {
Order.create(new_order, function(err, order) {
if (err) {
res.send(err);
}
res.json({ error:false, message:"Order added successfully!", data:order });
});
}
};
exports.findById = function(req, res) {
Order.findById(req.params.id, function(err, order) {
if (err) {
res.send(err);
}
res.json(order);
});
};
exports.update = function(req, res) {
if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
res.status(400).send({ error:true, message: 'Please provide all required fields' });
} else {
Order.update(req.params.id, new Order(req.body), function(err, order) {
if (err) {
res.send(err);
}
res.json({ error:false, message: 'Order successfully updated' });
});
}
};
exports.delete = function(req, res) {
Order.delete(req.params.id, function(err, order) {
if (err) {
res.send(err);
}
res.json({ error:false, message: 'Order successfully deleted' });
});
};