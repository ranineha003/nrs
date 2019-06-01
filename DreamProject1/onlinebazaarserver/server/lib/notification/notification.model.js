
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        lowercase:true,
        index:true
    },
    gender:{
        type:String,
        enum:['Male','Undisclosed','Female','Other'],
        default:'Undisclosed',
        required:true
    },
    status:{
        type:Number,
        default:1
    },
    role:{
        type:String,
        default:'user'
    },
    created_date:
    {
        type:Date,
        default:Date.now,
        index:true
    }
})

var User = mongoose.model('User', userSchema);
module.exports = User;
