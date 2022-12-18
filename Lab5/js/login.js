var pass = document.getElementById("password_first");
var pass2 = document.getElementById("password_last");

var number = document.getElementById("not-number");
var length = document.getElementById("length-pass");
var check_log = document.getElementById("not-login");
var log = document.getElementById("login_in")
var check_pass = document.getElementById("not-pass")
var pass1 = document.querySelectorAll(".red")
var log_check = document.getElementById("check-log")
var log_length = document.getElementById("length-log")


console.log(log.value);

log.onfocus = function() {
  document.getElementById("errors-log").style.opacity = 1;;
}
log.onblur = function() {
  document.getElementById("errors-log").style.opacity = 0;
}
log.onkeyup = function() {
  if(log.value.length <= 150) {
    log_length.classList.remove("invalid");
    log_length.classList.add("valid");
  } else {
    log_length.classList.remove("valid");
    log_length.classList.add("invalid");
  }

  var liter = /[a-zA-Z@+-_]+/;
  if(log.value.match(liter)) {     
    log_check.classList.remove("invalid");
    log_check.classList.add("valid");
  } else {    
    log_check.classList.remove("valid");
    log_check.classList.add("invalid");
  }
}

pass.onfocus = function() {
    document.getElementById("errors-pass").style.opacity = 1;;
}
pass.onblur = function() {
    document.getElementById("errors-pass").style.opacity = 0;
}
pass.onkeyup = function() {
  
  var numbers = /^[\d]+$/;
  if(pass.value.match(numbers)) {  
    number.classList.remove("valid");
    number.classList.add("invalid");
  } else {    
    number.classList.remove("invalid");
    number.classList.add("valid");
  }
  
  if(pass.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  if(pass.value.length == log.value.length){
        for(let i = 0; i<pass.value.length; i++){
            if(pass.value == log.value){
                console.log("work if")
                check_log.classList.remove("valid");
                check_log.classList.add("invalid");
            }else{
                console.log("work else1")
                check_log.classList.remove("invalid");
                check_log.classList.add("valid");
            }
        }
  }else{
    console.log("work else2")
    check_log.classList.remove("invalid");
    check_log.classList.add("valid");
  }

}

pass2.onkeyup = function (){
    pass2.onfocus = function() {
        document.getElementById("errors_overlap").style.opacity = 1;;
    }
    pass2.onblur = function() {
        document.getElementById("errors_overlap").style.opacity = 0;
    }
    for(let i = 0; i<pass1.length; i++){
        if(pass.value != pass2.value){
            pass1[i].style.border = "2px solid rgba(238, 34, 34, 0.9)";
            pass1[i].style.color = "rgba(238, 34, 34, 0.9)";
    }
        else{
            check_pass.classList.remove("invalid");
            check_pass.classList.add("valid");
            pass1[i].style.border = "2px solid rgba(60, 162, 85, 0.9)";
            pass1[i].style.color = "rgba(60, 162, 85, 0.9)";
    }
}
}

