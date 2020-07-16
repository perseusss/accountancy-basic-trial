//UI variables
const form  = document.querySelector('#box');
const input1 = document.querySelector('#compName');
const input2 =document.querySelector('#compAdjactive');
const input3 =document.querySelector('#phoneNumber');
const input4 =document.querySelector('#taxNumber');
const input5 =document.querySelector('#taxBuilding');

const btnsave = document.querySelector('#savebtn');

eventListener();

function eventListener()
{
    form.addEventListener('submit',addNewItem);
}

function addNewItem(e)
{
    if(input1.value ===""){
        alert("tam doldurun");
    }else{
   console.log(input1.value);
   console.log(input2.value);
   console.log(input3.value);
   console.log(input4.value);
   console.log(input5.value);
    e.preventDefault();
    }
}