//UI variables
var btnsave = document.querySelector('#savebtn');
document.querySelector('#savebtn').addEventListener('click',postData);
function postData(){

var inputcompname = document.querySelector('#compName').value;
var inputcomptitle =document.querySelector('#compAdjactive').value;
var inputphonenumber =document.querySelector('#phoneNumber').value;
var inputtaxnumber =document.querySelector('#taxNumber').value;
var inputtaxbuilding =document.querySelector('#taxBuilding').value;

    const data = {
        inputcompname,inputcomptitle,inputphonenumber,inputtaxnumber,inputtaxbuilding
    }
var json = JSON.stringify(data);
    console.log("json", json);
var url = "http://192.168.1.152:3000/api/v1/customers/add";
var xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function(){
        var data = JSON.parse(xhr.response);
            // console.log("data", data); 
       
        
    }
    xhr.send(json);
}
