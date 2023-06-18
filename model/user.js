const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userSchema= new mongoose.Schema({
   name:{type:String,required:'Full name can\'t be empty'},
   email:{type:String,required:'Email can\'t be empty',unique:true},
   dob:{type:String,required:'Dob  can\'t be empty'},
   phone:{type:String,required:'Phone  can\'t be empty'},
   password:{type:String,required:'Password can\'t be empty',minlength:[6,'Password must be atleast 6 character long']},

   saltSecret:String
  
});
userSchema.path('email').validate((val)=>{
    emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(val);
},'Invalid email');
userSchema.pre('save',function(next){
   bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(this.password,salt,(err,hash)=>{
        this.password=hash;
        this.saltSecret=salt;
        next();
      });
   });
});

userSchema.methods.verifyPassword= function(password){
   return bcrypt.compareSync(password,this.password);
}

userSchema.methods.generateJwt=function(){
   return jwt.sign({_id:this._id},
   process.env.JWT_SECRET||'SECRET#123',{
      expiresIn:process.env.JWT_EXP||'20m'
   });
}
mongoose.model('Student',userSchema);