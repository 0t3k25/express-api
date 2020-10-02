'use strict';
//mongoDBに接続するためのライブラリ
const mongoose = require('mongoose');
//mongoDBのスキーマを作る
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String,
    screen_name:String,
    bio:String
});

//スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model;('UserModel',UserSchema);
