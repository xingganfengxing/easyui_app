/**
 * Created by Keen on 2014-11-04.
 * description: 网站路由
 */

var express = require('express');
var router = express.Router();
var auth = require('./middlewares/auth');
var index = require('./controllers/index');
var users = require('./controllers/users');
var crawlmanager = require('./controllers/crawlmanager');
var carmanager = require('./controllers/carmanager');
var callcenter = require('./controllers/callcenter');
var devicemanager = require('./controllers/devicemanager');

router.get('/',auth.userRequired,index.default);
router.get('/default',auth.userRequired,index.default);
router.get('/getFuncTree',index.getFuncTree);

router.get('/test',index.test);


router.get('/carmanager/index',carmanager.index);
router.get('/callcenter/setservicephone',callcenter.setservicephone);
router.get('/callcenter/getCallNumberList',callcenter.getCallNumberList);
router.post('/callcenter/addCallNumber',callcenter.addCallNumber);
router.post('/callcenter/updateCallNumber',callcenter.updateCallNumber);
router.post('/callcenter/delCallNumber',callcenter.delCallNumber);

router.get('/devicemanager/getDeviceBind',devicemanager.getDeviceBind);
router.post('/devicemanager/addDeviceBind',devicemanager.addDeviceBind);
router.post('/devicemanager/updateDeviceBind',devicemanager.updateDeviceBind);
router.post('/devicemanager/delDeviceBind',devicemanager.delDeviceBind);

router.get('/users/login',users.get_login);
router.post('/users/login',users.post_login);
router.get('/users/logout',users.logout);

router.get('/crawls',auth.userRequired,crawlmanager.index);

module.exports = router;