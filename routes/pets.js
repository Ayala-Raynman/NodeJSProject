var express = require('express');
var router = express.Router();
const pets = require("../Model/PetsModel");//חיבור למודל

//הצגת רשימת כל חיות
router.get('/getall', function (req, res, next) {
  pets.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//הוספת חיה
router.post('/addpet', function (req, res, next) {
  pets.create(req.body).then(function (p) {
    res.send(p);
  }).catch(next);
});
//הוספת מספר חיות בו זמנית
router.post('/addMany', function (req, res, next) {
  pets.insertMany(req.body, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//מחיקת אוביקט מDB
router.delete('/delete/:id', function (req, res, next) {
  pets.findOneAndDelete({ _id: req.params.id }).then(function (pet) {
    res.send(pet)
  });
});

//עדכון אוביקט
router.put('/update/:id', function (req, res, next) {
  pets.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (pet) {
    pets.findOne({ _id: req.params.id }).then(function (pet) {
      res.send(pet)
    });
  });
});

module.exports = router;