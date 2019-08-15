const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/spacex");
var db=mongoose.connection;
db.on("error",(err)=>console.log(console.log(err)));
db.once("open",()=>console.log("connection established successfully"));
const Schema=mongoose.Schema;

const spaceXSchema=new Schema({
    flightNumber:{
        type:Number,
        required:true
    },
    rocketName:{
        type:String,
        required:true
    },
    launchDate:{
        type:Date,
        required:true
    },
    missionName:{
        type:String,
        required:true
    },
    missionPatchLink:{
        type:String,
        required:true
    }

})

const LaunchModel=mongoose.model("Launch",spaceXSchema);
module.exports=LaunchModel;