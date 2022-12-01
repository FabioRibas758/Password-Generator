let slider = document.querySelector("#slider");
let button = document.querySelector("#gerador");

let sizePassword = document.querySelector("#quantidade");
let password = document.querySelector("#password");

let containerPass = document.querySelector("#hidden-container");
let charset =  ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#&");

let NovaSenha = " ";

sizePassword.innerHTML = slider.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value; 
}

function GerarSenha(){
    let pass = " " ;
    NovaSenha = pass;

    for (let i = 0 , n = charset.length; i< slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n));
    }
    console.log(pass);

    containerPass.classList.remove("hide");
    password.innerHTML = pass;
    
}
function CopyPass(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(NovaSenha);
}