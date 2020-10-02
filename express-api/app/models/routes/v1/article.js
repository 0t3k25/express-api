'use strict';
const express = require('express');
const router = express.Router();

//GET http://locaalhost:3000/api/v1/article/test
router.get('/test',function(req,res) {
    res.json({
        message:"This is article api"
    });
});

//routerをモジュールとして扱う準備
module.exports = router;