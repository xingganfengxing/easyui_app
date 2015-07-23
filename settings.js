/**
 * Created with JetBrains WebStorm.
 * User: Keen
 * Date: 8/30/13
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = {
    host:"localhost",
    port:3030,
    cookieSecret : 'CallServiceCenterByKeen',
    mongodb : {
        dbname:'CallServiceCenter',
        host : '127.0.0.1'
    },
    mysqldb:{
        host:'127.0.0.1',
        port:3306,
        user:'root',
        password:'root',
        database:'mydb'
    },
    redis:{
        host:'127.0.0.1',
        port:6379
    },
    socket_io_server:{
        host:"127.0.0.1",
        port:"6065"
    },
    web_title:"后台管理系统"
};
