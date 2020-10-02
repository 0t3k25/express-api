'use strict';
const express = require('express');

const router = express.Router();

//routerにルーディングの動作を書いていく
router.use('/article',require('./article.js'));
router.use('/user',require('./user.js'));

//routerをモジュールとして扱う準備
module.exports = router;
