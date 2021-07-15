var express = require('express');
var router = express.Router();
const pets = require("../Model/PetsModel");//חיבור למודל

//הצגת רשימת כל חיות
router.get('/get', async (req, res, next) => {
  await pets.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//הוספת חיה
router.post('/post', async (req, res, next) => {
  await pets.create(req.body).then(function (p) {
    res.send(p);
  }).catch(next);
});
//הוספת מספר חיות בו זמנית
router.post('/addMany', async (req, res, next) => {
  await pets.insertMany(req.body, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//מחיקת אוביקט מDB
router.delete('/delete/:id', async (req, res, next) => {

  await pets.findOneAndDelete({ _id: req.params.id }).then(function (pet) {

    res.send("The object was successfully deleted")
  });

});

//עדכון אוביקט
router.put('/put/:id', async (req, res, next) => {
  await pets.findOneAndUpdate({ _id: req.params.id }, req.body).then(async (pet) => {
    await pets.findOne({ _id: req.params.id }).then(function (pet) {
      res.send(pet)
    });
  });
});
module.exports = router;