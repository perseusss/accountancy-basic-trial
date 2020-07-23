//UI variables



document.querySelector('#savebtn').addEventListener('click',postData);
function postData(){
    
    var inputcompname = document.getElementById('compName').value;
    var inputcomptitle =document.getElementById('compAdjactive').value;
    var inputphonenumber =document.getElementById('phoneNumber').value;
    var inputtaxnumber =document.getElementById('taxNumber').value;
    var inputtaxbuilding =document.getElementById('taxBuilding').value;

    const data = {
        inputcompname,inputcomptitle,inputphonenumber,inputtaxnumber,inputtaxbuilding
    }
    
    var json = JSON.stringify(data);
        //console.log("json", json);
    var url = "http://192.168.1.152:3000/api/v1/customers/add";

        var xhr = new XMLHttpRequest(); //xhr objesi
        xhr.open('POST',url,true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function()
        {
            var data32 = JSON.parse(xhr.response);
                console.log(xhr.response);
                console.log("data", data32); 
                
        }    
    xhr.send(json);  
}

        // document.querySelector('#savebtn').onclick = function showalert(){
    
        // if(inputcompname == "" || inputcomptitle=="" || inputphonenumber =="" ||  inputtaxnumber == "" ||inputtaxbuilding == ""){
        //     alert("lütfen bütün alanları doldurunuz");
        // }

// }



// function addingcustomer(){
//     const div = document.createElement('div');
//     div.className ='allcustomers';
//     // console.log(div);
//     div.innerHTML =' <button onclick="window.setTimeout(function(){location.href ="http://127.0.0.1:5500/paymentPage/payment.html,1000" )};id = "btninfoid" class ="btninfo" type="button"><img height = "10px" width = "10px"class = "infoPhoto" src="info.png" alt="info"></button>'
//     ;
//     }
//     addingcustomer();