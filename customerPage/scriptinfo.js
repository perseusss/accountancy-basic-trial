
//import { Course } from './course.js';
// var courseDate = new Course();
// console.log("id", courseDate.id);
const button = document.getElementById("plusbtn");
function pencereAc(adres)
{
    window.open(adres, "_target");
}

button.onclick = function()
{
    pencereAc("http://127.0.0.1:5500/addcustomerPage/addcustomer.html");
}

var userid = localStorage.getItem("id");    
console.log(userid);


