const express=require("express");
const app=express();

//const LaunchModel=require("./mongo");
const port=3000;
const fetch=require("node-fetch");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));


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
})