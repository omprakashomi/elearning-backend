const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const userQSchema= new mongoose.Schema({
   firstname:{type:String,required:'Full name can\'t be empty'},
   lastname:{type:String,required:'Email can\'t be empty'},
   email:{type:String,required:'Dob  can\'t be empty'},
   phone:{type:String,required:'Phone  can\'t be empty'},
   quries:{type:String,required:'Password can\'t be empty'},
 
});
mongoose.model('Quries',userQSchema);