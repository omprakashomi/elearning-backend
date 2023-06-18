const mongoose= require('mongoose');
const Quiry= mongoose.model('Quries');



module.exports.register=(req,res,next)=>{
    const studentq=new Quiry();
    studentq.firstname=req.body.firstname;
    studentq.lastname=req.body.lastname
    studentq.email=req.body.email;
    
    studentq.phone=req.body.phone;
    studentq.quries=req.body.quries ;
    studentq.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
              return next(err);
          }
        
    });
}




