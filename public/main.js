const api_url="/api";

/*
function getData(){
    fetch(api_url)
.then((res) => {
    return res.json()})
.then((data)=>{
   
data.forEach(element => {
    console.log(element)
    var div=document.createElement("div");
    div.innerHTML=element. mission_name;
   var container=document.querySelector(".container");
   container.appendChild(div)

})})
}
getData();

*/

let data;
let t1;

const getData=async ()=>{
t1=new Date().getTime();
    const response=await fetch(api_url);
     data=await response.json();
     console.log(data,(new Date().getTime()-t1)/1000);
}
getData();
setTimeout(()=>{
    var container=document.querySelector(".container1");
    const html=data.map(item=> `<div class="card card-body mb-1 text-center">
  
   <h3><span class="text-primary">Flight No:</span>${item.flight_number}</h3>
    <h4><span class="text-primary">MissionName:</span>${item.mission_name}</h4>
    <h4><span class="text-primary">RocketName:</span>${item.rocket.rocket_name}</h4>
    <img src=${item.links.mission_patch} style="width:200px;height:200px;">
    <h5><span class="text-primary">LauchedOn</span>-${new Date(item.launch_date_unix).toLocaleString()}</h5>
   </div>`
    )
  
    container.innerHTML = html;
},2000)











