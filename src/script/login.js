



document.querySelector('#postData').addEventListener('click',postData);
    function pencereAc(adres)
    {
        window.open(adres, "_blank");
    }
   

function postData(){
        var username  = document.getElementById("UserName").value;
        var password = document.getElementById("UserPassword").value;
    const data = {
       username, password
    }

    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/api/v1/users/login";
    var xhr = new XMLHttpRequest();
    
        xhr.open('POST',url,true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function(){
            var data = JSON.parse(xhr.response);
            // console.log("data", data.data.id);
            if(data.status == "success") { 
            pencereAc("http://127.0.0.1:5500/customerPage/index.html");
            localStorage.setItem("id",data.data.id);
                //console.log("success");
                // test = data.data.id
              //  alert("şifren dogru");
            } else { 
                alert("şifren yanlış");
            }

      
           
    }
      xhr.send(json);
    
}

