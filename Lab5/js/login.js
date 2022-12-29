let login_input = document.querySelector("#login-name");
let password_input = document.querySelector("#first-password");
let check_password_input = document.querySelector("#last-password");
let err = document.querySelectorAll(".error");

login_input.onkeyup = function(){
    err_activ(login_input, 0);

    if(login_input.value.match(/[a-zA-Z@+-_]+/)) {     
        return_color (0, "active", 0)
    } else {    
        return_color (0, "not", 0)
    }

    if(login_input.value.length <=150){
        return_color (0, "active", 1)
    } else {    
        return_color (0, "not", 1)
    }
};


password_input.onkeyup = function(){
    err_activ(password_input, 1);
    if(password_input.value.length >=8){
        return_color (1, "active", 0)
    } else {    
        return_color (1, "not", 0)
    }

    if(password_input.value.match(/^[\d]+$/)) {  
        return_color (1, "not", 1)
    } else {    
        return_color (1, "active", 1)
    }

    if(password_input.value != login_input.value){
        return_color (1, "active", 2)
    }else{
        return_color (1, "not", 2)
    }
    if(password_input.value != check_password_input.value){
        if(password_input.value == check_password_input.value){
        return_color (2, "active", 0)
        check_password_input.style.color = "rgba(60, 162, 85, 0.9)";
        check_password_input.style.borderColor = "rgba(60, 162, 85, 0.9)"
     }else{
        return_color (2, "not", 0)
        check_password_input.style.color = "rgba(238, 34, 34, 0.9)";
        check_password_input.style.borderColor = "rgba(238, 34, 34, 0.9)"
    }
}
};

check_password_input.onkeyup = function(){
    err_activ(check_password_input, 2);
    if(password_input.value == check_password_input.value){
        return_color (2, "active", 0)
    }else{
        return_color (2, "not", 0);
    }
};



function err_activ (input, id){
    if(input.value.length >0){
        err[id].style.display = "flex";
    }else{
        err[id].style.display = "none";
    }
}

function return_color (id, status, errLineNum){
    if(status == "active"){
        err[id].children[errLineNum].style.color = "rgba(60, 162, 85, 0.9)";
        err[id].children[errLineNum].children[0].src = "./material/ok.png";
        if(id == 2){
            check_password_input.style.color = "rgba(60, 162, 85, 0.9)";
            check_password_input.style.borderColor = "rgba(60, 162, 85, 0.9)"
        }
    }else{
        err[id].children[errLineNum].style.color = "rgba(238, 34, 34, 0.9)";
        err[id].children[errLineNum].children[0].src = "./material/bad.png";
        if(id == 2){
            check_password_input.style.color = "rgba(238, 34, 34, 0.9)";
            check_password_input.style.borderColor = "rgba(238, 34, 34, 0.9)"
        }
    }

}