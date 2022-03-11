const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    layout: './layouts/main-layout.ejs'
  });
});


router.get('/home', function (req, res, next) {
  res.render('home', {
    title: 'Ini adalah halaman bootstrap',
    layout: './layouts/main-layout.ejs'
  });
});


module.exports = router;