'use strict';
//mongoDBに接続するためのライブラリ
const mongoose = require('mongoose');
//mongoDBのスキーマを作る
const Schema = mongoose.Schema
const moment = require('moment');

const ArticleSchema = new Schema({
    title:String,
    text:String,
    date:String
});

ArticleSchema.methods.setDate = function () {
    //作った時間をセット
    this.date = moment().format("YYYY-MM-DD HH:mm:ss");
};

//スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('ArticleModel',ArticleSchema);
