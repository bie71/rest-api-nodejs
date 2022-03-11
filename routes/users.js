const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', {
    title: 'ini adalah halaman user',
    users: 'Habibi',
    layout: './layouts/main-layout.ejs'
  });
});

module.exports = router;