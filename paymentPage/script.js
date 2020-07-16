// Popup Al

var modal0 = document.getElementById('myModal');
var modal1 = document.getElementById('myModal2');
var modal2 = document.getElementById('myModal3');
// Kipi açan düğmeyi al
var btn0 = document.getElementById("gettingpaymentbtn");
var btn1 = document.getElementById("givingpaymentbtn");
var btn2 = document.getElementById("addingidbtn");

// Kipi kapatan <span> öğesini edinin
var span0 = document.getElementById("span0");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
// Kullanıcı düğmeyi tıklattığında
btn0.onclick = function() {
    modal0.style.display = "block";
}
btn1.onclick = function(){
    modal1.style.display = "block";
}
btn2.onclick = function(){
    modal2.style.display = "block";
}
// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span0.onclick = function() {
    modal0.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal0) {
        modal0.style.display = "none";
    }else if(event.target == modal1){
        modal1.style.display ="none";
    }else if(event.target == modal2)
        modal2.style.display = "none"
    }
