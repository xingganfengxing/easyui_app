/**
 * Created by Keen on 2014-11-04.
 *
 *  //web对外接口
 */

var express = require('express');

var complaints = require('./api/v1/complaints');
var callservice = require('./api/v1/callservice');
var deviceservice = require('./api/v1/deviceservice');

var router = express.Router();


router.get('/complaints',complaints.index);

router.get('/callservice/getcallnumber',callservice.getcallnum);

router.post('/deviceservice/pushdest',deviceservice.pushdest);

router.post('/deviceservice/pushtext',deviceservice.pushtext);

module.exports = router;