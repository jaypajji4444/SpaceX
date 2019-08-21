
// ------------------------------ promise handling to fetch..........
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
const api_url="/api";

let data;
let t1;

const getData=async ()=>{
     t1=new Date().getTime();// start time
     const response=await fetch(api_url);
     data=await response.json();
     console.log(data,(new Date().getTime()-t1)/1000); // difference of atart time to time after getting the response..


setTimeout(()=>{ // displaying the data in html page...
    var container=document.querySelector(".container1");
    const html=data.map(item=> `<div class="card card-body mb-1">
  
   <h3><span class="text-primary">Flight No:</span>${item.flight_number}</h3>
    <h4><span class="text-primary">MissionName:</span>${item.mission_name}</h4>
    <h4><span class="text-primary">RocketName:</span>${item.rocket.rocket_name}</h4>
   <div><img src=${item.links.mission_patch} style="width:200px;height:200px;"></div>
    <h5><span class="text-primary">LauchedOn</span>-${new Date(item.launch_date_local).toLocaleString()}</h5>
   </div>`
    )
  
    container.innerHTML = html;
},1500)

}
document.getElementById("btn2").addEventListener("click",getData); // fetching the data on clicking of the button 
// event listener on button 1 to sote the data to databse......................................
var button=document.getElementById("btn1");
button.addEventListener("click",StoreData);
//  post request from clicenet to sotre the data to database..................
  function StoreData(){
    console.log(data);

    fetch("/api",{
        method: 'post',
        body: JSON.stringify(data),// data to server shld be string dso convrsion from js object to string..
        headers: new Headers({ 
            'Content-Type': 'application/json'
        })

  }).then(res=>res.json()).then(d=>console.log(d)).catch(err=>console.log(err));
}












