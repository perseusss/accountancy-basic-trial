document.querySelector('#postData').addEventListener('click',postData);

function postData(){
    const data ={
        username : "root",
        password : "1234"
    }

    var json = JSON.stringify(data);
    var url = "http://192.168.1.152:3000/users/login";
    var xhr = new XMLHttpRequest();

    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function(){
            if(xhr.status == 'success')
            {
                var post = xhr.responseText;
            }
            // console.log(post);
            console.log(xhr.status);
    }
     xhr.send(json);
}