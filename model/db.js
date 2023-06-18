

const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Kishan:Kish1234VNS@cluster0.omgzd.mongodb.net/angular_database?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to Database!");
}
)
.catch(()=>{
    console.log("connection is failed");
});
module.exports=mongoose;
require('./user');
require('./userQuries');
require('./question');