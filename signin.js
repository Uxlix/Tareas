document.getElementById("formSignIn").addEventListener("submit", getUser);

function getUser(e) {
    let users = JSON.parse(localStorage.getItem("users"))
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    
    if (user === "" && pass === ""){
     alert("Ingresa datos correctos")
    } else {
      for (let i = 0; i < users.length; i++) {
        if (users[i].usuario === user && users[i].pass === pass){
          window.location = "./app.html";
        }
      }
    }
    

    document.getElementById("formSignIn").reset();
    e.preventDefault();
}
  
