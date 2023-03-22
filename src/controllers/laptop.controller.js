'use strict';
const Laptop = require('../models/laptop.model');
exports.findAll = function(req, res) {
Laptop.findAll(function(err, laptop) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', laptop);
  res.send(laptop);
});
};
exports.create = function(req, res) {
const new_laptop = new Laptop(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Laptop.create(new_laptop, function(err, laptop) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Laptop added successfully!",data:laptop});
});
}
};
exports.findById = function(req, res) {
Laptop.findById(req.params.id, function(err, laptop) {
  if (err)
  res.send(err);
  res.json(laptop);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Laptop.update(req.params.id, new Laptop(req.body), function(err, laptop) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Laptop successfully updated' });
});
}
};
exports.delete = function(req, res) {
Laptop.delete( req.params.id, function(err, laptop) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Laptop successfully deleted' });
});
};