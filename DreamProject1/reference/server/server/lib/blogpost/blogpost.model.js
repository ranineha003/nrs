
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BlogPostSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    ads_img:{
        type:String
    },
    tags:{
        type:Array,
        require:true
    },
    post : {
        type:String,
        require:true
    },
    created_by:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        default:Date.now,
        index:true
    }
})

var BlogPost = mongoose.model('blogpost', BlogPostSchema);
module.exports = BlogPost;
