
require('./model/db');
require('./config/passportConfig')

const express = require('express');
const passport= require('passport');
const cors= require('cors');

const app = express();

const bodyParser= require('body-parser');


const rtsIndex=require('./routes/index.router');


app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());    
app.use('/api',rtsIndex);

app.use((err, req,res,next)=>{
    if(err.name==='ValidationError'){
        var ValErrors=[];
        Object.keys(err.errors).forEach(key=>ValErrors.push(err.errors[key].message));
        res.status(422).send(ValErrors);
    }
    next();
});

app.listen(process.env.PORT||"3000",()=>console.log('SERVER started at port: 3000;'));