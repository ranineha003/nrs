var express =require('express')
var router=express.Router();

router.use(function timeLog(req,res,next){
    console.log('User called at Time: ',Date.now());
    next();
})

router.get('/',function(req,res){
    res.render('index',{title:'Sanjeev'});
})


router.get('/about',function(req,res){
    res.send('This is about user');
})

module.exports=router;
