const passport= require('passport');
const localStrategy= require('passport-local').Strategy;
const mongoose= require('mongoose');
var Student= mongoose.model('Student');

passport.use(
    new localStrategy({usernameField:'email'},
    (username,password,done)=>{
        Student.findOne({email:username},
            (err,user)=>{
                if(err){
                    return done(err);
                }
                else if(!user){
                    return done(null, false,{message:"Email is not registerd"});
                }
                else if(!user.verifyPassword(password)){
                    return done(null, false, {message:'Wrong Password'});
                }
                else{
                    return done(null, user);
                }
        });
    }
    )

);
