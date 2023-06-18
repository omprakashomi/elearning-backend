const mongoose= require('mongoose');
const Question= mongoose.model('Question');
const _ = require('lodash');




module.exports.register=(req,res,next)=>{
    const questions=new Question();
    questions.questionText=req.body.questionText;
    questions.option=req.body.option;
    
    questions.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
              return next(err);
          }
        
    });
}


module.exports.questionAll= async(req,res)=>{
       
    try{
        const quest=await Question.find();
        res.json(quest);
    }catch(error){
        res.json({message:error});
    }
   
           
                
} ;    
        

