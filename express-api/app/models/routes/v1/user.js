'use strict';
const express = require('express');
const router = express.Router();
const UserModel = require('../../userModel.js');

router.post('/',function(req,res){
    console.log()
    //モデル作成
    const User = new UserModel();
    console.log("userObjective");
    //データを詰め込む
    User.name =req.body.name;
    User.screen_name = req.body.screen_name;
    User.bio = req.body.bio;
    //console.log(req.body.name);
    //console.log(req.body.screen_name);
    //console.log(req.body.bio);
    //保存処理
    User.save(function(err){
        if(err){
            //エラーがあった場合エラーメッセージを返す
            console.log('errraaaa');
            res.send(err);
        } else {
            //エラーがなければ「succrss!」
            console.log('Success!!!!!!!!')
            res.json({message:'Success!!'});
        }
    });
});

//保存データ取得
router.get('/',function(req,res){
    UserModel
    .find()
    .then(function(users){
        res.json(users)
        console.log(users)
    })
})

//idリクエストにより情報取得
router.get('/:id',function(req,res){

    const Userid = req.params.id;
    UserModel
        .findById(Userid,function(err,user){
            res.json(user);
        });
});

router.put('/:id',function(req,res){
    
    const Userid = req.params.id;

    UserModel
        .findById(Userid,function(err,user){
            if(err){
                console.log(err);
                res.send(err);
            } else {

                user.name = req.body.name;
                user.screen_name = req.body.screen_name;
                user.bio = req.body.bio;

                user.save(function(err){
                    if (err){
                        res.send(err);
                    } else {
                        res.json({message:'Success!'});
                    }
                });
            }
        });
});

//routerをモジュールとして扱う準備
module.exports = router;
