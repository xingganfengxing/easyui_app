/**
 * Created by Keen on 2014-10-29.
 */

var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: 'console',
            category: "console"
        }, //控制台输出
        {
            type: "dateFile",
            filename: 'logs/log.txt',
            pattern: "yyyyMMdd",
            alwaysIncludePattern: false,
            category: 'dateFileLog'
        }//日期文件格式
    ]
});
var logger = log4js.getLogger('dateFileLog');
module.exports = logger;

