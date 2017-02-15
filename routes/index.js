var express = require('express');
var router = express.Router();
var upload = require('../controller/upload.js');
var list = require('../controller/list.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: ''});
});
router.get('/upload', function (req, res, next) {
    res.render('upload', {title: '上传文件'});
});

router.post('/file/uploading', function (req, res, next) {
    req.query.userId = 1;
    //console.log(req.body);
    //console.log(req.query);
    //req.query.type = 1;
    //res.end('666');
    //return;
    upload.up(req,res);
});
router.get('/list',function (req, res, next) {
    // console.log(111);
    list.do(req,res);
});

module.exports = router;
