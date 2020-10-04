'use strict';
const express = require('express');
const router = express.Router();
const ArticleModel = require('../../articleModel.js');


//GET http://locaalhost:3000/api/v1/article/test
router.post('/',function(req,res) {
    //モデル作成
    var Article = new ArticleModel();

    //データ詰め込み
    Article.title = req.body.title;
    Article.text = req.body.text;
    Article.setDate();

    //保存処理
    Article.save(function(err) {
        if(err){
            //エラーがあった場合エラ〜メッセージを返す
            res.send(err);
            console.log('errooor');
        } else {
            ///エラーが出なければ「Success!」
            console.log('success');
            res.json({message:'Success!'});
        }
    });
});

//記事情報取得
router.get('/',function(req,res){
    ArticleModel
        .find()
        .then(function(articles){
            res.json(articles);
        });
});

//削除
router.delete('/:id',function(req,res){
    const Aritcleid =req.params.id;
    ArticleModel.remove({_id:Aritcleid})
        .then(function(){
            res.json({message:'succerss'})
        })
})
//routerをモジュールとして扱う準備
module.exports = router;