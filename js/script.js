const utenti= ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password= ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];

function verifica() {
    let user = document.getElementById("nome").value;
    let pass = document.getElementById("password").value;
    let err = document.getElementById("errore");
    let indice = utenti.indexOf(user);
    
            if(indice == - 1){
                err.classList.remove("d-none");
                err.innerHTML = ("Login failed. User not registered")
                err.classList.add("alert-danger");
            } else if(password[indice] == pass) {
                err.classList.remove("d-none")
                err.innerHTML = ("Login successful");
                err.classList.add("alert-success");
                err.classList.remove("alert-danger");
            } else {
                err.classList.remove("d-none");
                err.innerHTML = ("Login failed. Password incorrect");
                err.classList.add("alert-danger");
                err.classList.remove("alert-success");
    }
}

function rivelaPass() {
    let word = document.getElementById("password");
    let icona = document.getElementById("rivela");

    if (word.type == "password") {
        word.type = "text";
        icona.classList.remove("bi-eye-slash");
        icona.classList.add("bi-eye");
    } else {
        word.type = "password";
        icona.classList.remove("bi-eye");
        icona.classList.add("bi-eye-slash");
    }
}