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
//console.log(userid);

function getData(){
        var url = `http://192.168.1.152:3000/api/v1/customers/${userid}`;
        var xhr = new XMLHttpRequest();
        // console.log(xhr.response);
        xhr.open('GET',url,true);
        xhr.onload = function(){
           
           var posts = JSON.parse(this.response);
           
           console.log(posts);
        //    console.log(typeof posts.data.customers);

           var array = (posts.data.customers);
           for (var i = 0; i <array.length; i++) {
               console.log(array[i]);
      }
       
       
       
        }
        xhr.send();
       
}
getData();

document.getElementById("custom").innerHTML = 
 
 
  