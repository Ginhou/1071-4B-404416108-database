var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'tamkamg university', name: 'lao ngan fong', id: '40441610' });
});

module.exports = router;