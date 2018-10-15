var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "李冠樺,陳志雍,劉銀鋒"
    }, {
        id: 2,
        username: "G14"
    }]);
});

module.exports = router;