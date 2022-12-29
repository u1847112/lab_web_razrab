let btn = document.querySelector("#menu");
let header = document.querySelector(".header");
let category = document.querySelector(".main-category");

console.log( header.classList[1]);

btn.onclick = function(){
    if(header.classList[1] == undefined){
        header.classList.add("open");
        category.classList.add("open");
        btn.src = "./material/Burger.png"
    }else{
        header.classList.remove("open");
        category.classList.remove("open");
        btn.src = "./material/Union.png"
    }
}