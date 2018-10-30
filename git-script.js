


const Form = document.getElementById("form");
const userName = document.getElementById("name");
const response = document.getElementById("getdata");
const responseTemplate = document.getElementById("responseTemplate").innerHTML;
const res = document.getElementById("res_container");


function hideMessage(){
    document.getElementById("message").innerHTML = "";
}
function showMessage(){
    document.getElementById("message").innerHTML = "Don't type space while typing username.";
    document.getElementById("getdata").style.display = "none";
    document.getElementById("userImg").style.display = "none";
}

 
    
Form.onsubmit = sendData;

function sendData(e) {
    e.preventDefault();

     document.getElementById("loader").style.display = "block";
    let url = `https://api.github.com/users/${userName.value}`;
    fetch(url).then(res => res.json()).then(data => {
        
        displayData(data) })
        .catch(err => alert(err))
}

 
    function displayData(data) {
        
        if(data.login === undefined) {
            document.getElementById("loader").style.display = "none";
            document.getElementById("getdata").style.display = "block";
            let img_url = data.avatar_url;
            document.getElementById("userImg").style.display = "block";
            document.getElementById("userImg").setAttribute("src", 'emoji.png');
            // response.innerHTML = document.getElementById("not-found").innerHTML;

        }else {
            let img_url = data.avatar_url;
        document.getElementById("userImg").setAttribute("src", img_url);
        document.getElementById("userImg").style.display = "block";
        
        
        
        let newData = responseTemplate.replace('{{name}}', data.login);
        newData = newData.replace("{{id}}", data.id);
        newData = newData.replace("{{email}}", data.email);
        newData = newData.replace("{{followers}}", data.followers);
        newData = newData.replace("{{repos}}", data.repos);
        document.getElementById("loader").style.display = "none";
        document.getElementById("getdata").style.display = "block";
        response.innerHTML = newData;
        
         
    };
        }
        
    
    


