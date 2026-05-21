function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;
    let msg = document.getElementById("msg");

    if(u =="roshni" && p == "123") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("mainBox").style.display = "block";
        msg.innerText = ""; 
    } else {
        msg.innerText = "Wrong username or password"; 
        msg.style.color = "red";
    }
}

function check() {
    let file = document.getElementById("file").files[0];
    let result = document.getElementById("result");

    if(!file) {
        result.innerText = "Please select a file";
        result.style.color = "orange";
        return;
    }

    if(Math.random() > 0.5) {
        result.innerText = "REAL DOCUMENT";
        result.style.color = "green";
    } else {
        result.innerText = "FAKE DOCUMENT";
        result.style.color = "red";
    }
}