var express = require('express');
var router = express.Router();
var tasksController = require('../controllers/tasks.controller');
var mware = require('../middleware');

function setHeaderXid(req, res, next) {
  req.headers['X-Request-Id'] = req.trace.id;
  res.set({
    'X-Request-Id': req.trace.id
  })
  next();
}

router
    .post('/', mware, setHeaderXid, tasksController.create)
    .get('/:id', mware, setHeaderXid, tasksController.getById)
    .get('/', mware, setHeaderXid, tasksController.getAll);

module.exports = router;