const input = document.querySelector(".input");
const password = document.querySelector(".password");
const button = document.querySelector("#btn");
const output = document.querySelector(".output");

function check (){
//    let textValue = input.value;
   let passwordValue = password.value;
    if(passwordValue.includes(input.value) ){
       
        output.innerText = "password cannot conatin your name"
    } else{
        output.innerText = "password is okay"
    }
}

button.addEventListener('click', check)