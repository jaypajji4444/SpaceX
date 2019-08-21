const express=require("express");
const app=express();
const bodyParser=require("body-parser");

const LaunchModel=require("./mongo");// data model
const port=3000;
const fetch=require("node-fetch");  //packge for using FETCH()
app.use(express.json({limit: '50mb'})); // it helps to recognize inclommng object as json object // limit set to 50 to handle large data

app.use(express.urlencoded({limit: '50mb'}));// it helps to recognizeincoming on=bject as  string or arrayss.
app.use(express.static("public")); // setting up the public folder as static



app.listen(port,(()=>{
console.log(`The server is running successfully on :${port}`);
}))


app.get("/api",(req,res)=>{
    console.log("request received from client......")
    fetch("https://api.spacexdata.com/v2/launches")
    .then(res=>res.json())
    .then(data=>res.json(data));

})

app.post("/api",(req,res)=>{
    console.log("Post request from client received....");
    //console.log(req.body);
    var jay=req.body;
    console.log(jay[1].rocket.rocket_/name);

   
        
    jay.forEach(element => {
        const Launch={
            flightNumber:element.flight_number,
            rocketName:element.rocket.rocket_name,
            launchDate:element.launch_date_local,
            missionName:element.mission_name,
            missionPatchLink:element.links.mission_patch
        }
        var myData = new LaunchModel(Launch);
        myData.save()
        .then(item => {res.send("item saved to database");})
        .catch(err => {res.status(400).send("unable to save to database")});
        
    })
})
