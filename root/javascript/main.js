var jwt = localStorage.getItem("jwt")
if(jwt != null) {
    window.location.href = "./index.html";
}

function login(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value; 

    const xhttp = new XMLHttpRequest(); 
    xhttp.open("POST", "index.html") // INSERT LOGIN page here; 
    xhttp.setRequestHeader("Content-Type", "application/json:charset=UTF-8");
    xhttp.send(
        JSON.stringify({
            username:user,
            password:pass,
        })
    );
    xhttp.onreadystatechange = function (){ 
        if(this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            if(objects ["status"] == "ok") {
                localStorage.setItem("jwt", objects["accessToken"]);
                Swal.fire({ 
                    text: objects["message"],
                    icon: "success",
                    confirmButtonText: "OK",
                }).then((result)=> {
                    if(result.isConfirmed) {
                        window.location.href = "./index.html"
                    }
                }); 
            } else {
                Swal.fire ({
                    text:objects["Message"],
                    icon: "error",
                    confirmButtonText: "OK",

                });
            }
        }
    };
    return false; 

}

function regval(){
    console.log("HEY this function is communicating");
}

function butResp(type){
    if(type=='skip'){
        const urlParams = new URLSearchParams(window.location.search);

        window.onload = function() {
            window.location.href = urlParams.get('root/homeIndex.html');
        }
    }
    if(type=='op-reg'){
        document.getElementById("login").style.display = "none";
        document.getElementById("reg").style.display = "inherit"; 
        document.getElementById("open-reg").style.display= "none";
    }
}