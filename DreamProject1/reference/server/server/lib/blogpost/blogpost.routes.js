var express =require('express')
var router=express.Router();
var controller=require('./blogpost.controller')
var islogin=require('../../lib/auth/authenticate');

router.get('/list',controller.list);
router.get('/list/protected',islogin.isLoggedIn,controller.Protectedlist);
router.post('/create',islogin.isLoggedIn,controller.create);
router.post('/deletepost',islogin.isLoggedIn,controller.deletepost);
router.post('/updatepost',islogin.isLoggedIn, controller.updatepost);

module.exports=router;
