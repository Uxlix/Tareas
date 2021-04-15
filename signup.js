document.getElementById("formSignUp").addEventListener("submit", saveUser);


function saveUser(e){
    let usuario = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let user = {
        usuario,
        pass
    };

    if (usuario === "" && pass === ""){
        alert("Ingresa datos correctos");
    } else {
        if (localStorage.getItem("users") === null){
            let users = [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
    
        } else {
            let users = JSON.parse(localStorage.getItem("users"));
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
   
    document.getElementById("formSignup").reset();
    e.preventDefault();
}

