
var app = require('express');
var router = app.Router();
var loginText = require('../data/login');


router.get('/login', function (req, res, next) {
    //
    console.log('req.query.data:'+req.query.data);
    var resp= {'Result':{'valid':loginText.loginData(req, res).valid}} ;
    console.log('login result is:'+resp);
    res.status(200);
    res.send(JSON.stringify(resp));
});

module.exports = router;