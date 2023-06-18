const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const questSchema= new mongoose.Schema({
   questionText: String,
    option:[
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
 
});
mongoose.model('Question',questSchema);