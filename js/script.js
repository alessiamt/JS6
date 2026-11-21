const utenti= ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password= ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];

function verifica() {
    let user = document.getElementById("nome").value;
    let pass = document.getElementById("password").value;
    let err = document.getElementById("errore");

    for(i=0; i < utenti.length; i++){
        if(user == utenti[i]){
            if(pass == password[i]){
                err.classList.add("d-none");
                console.log("acccesso");
                return;
            } else {
                err.classList.remove("d-none");
                err.innerHTML = ("Login failed. Password incorrect")
                return;
            }
        }
    }
    err.classList.remove("d-none");
    err.innerHTML = ("Login failed. User not registered")
}

function rivelaPass() {
    let word = document.getElementById("password");
     let icona = document.getElementById("rivela");

    if (word.type === "password") {
        word.type = "text";
        icona.classList.remove("bi-eye-slash");
        icona.classList.add("bi-eye");
    } else {
        word.type = "password";
        icona.classList.remove("bi-eye");
        icona.classList.add("bi-eye-slash");
    }
}