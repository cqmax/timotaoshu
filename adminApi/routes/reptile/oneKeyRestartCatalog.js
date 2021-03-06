var express = require('express');
var router = express.Router();
const {oauth, tool, db, log, fs, path} = require("../../tool/require");
const {reptileService} = require("../../service/");
/*
* 一键爬取错误列表
* 也就是爬取错误列表
* */
router.use('', oauth(4008), async function (req, res, next) {
    let bookName = tool.getParams(req, 'bookName');
    reptileService.oneKeyRestartCatalog(bookName).then((msg) => {
        res.send(tool.toJson(msg, null, 1000));
    }).catch((err) => {
        res.send(tool.toJson(null, err, 1002));
    });
});

module.exports = router;
