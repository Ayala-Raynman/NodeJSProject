var express = require('express');
var router = express.Router();
const cars = ["aaa", "bbb", "cccc"];
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ name: "ayala" }])
});
router.post('/', function (req, res, next) {
  cars.push(req.body.name);
  res.send(cars)
});
router.delete('/', function (req, res, next) {
  cars.slice(req.body.name);
  res.send(cars)
});

module.exports = router;
