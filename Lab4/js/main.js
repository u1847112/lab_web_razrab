
let on = document.querySelector('.color-btn');
let off = document.querySelector('.res-btn');
let list = document.querySelectorAll('.iteam-list');
let hrefs = document.querySelectorAll('a[href*="#"]')

on.addEventListener('click', function(){
    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){
            list[i].style.backgroundColor = 'lightgreen';
        }
    }    
})

off.addEventListener('click', function(){
    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){
            list[i].style.backgroundColor = 'transparent';
        }
    }    
})

for (let href of hrefs){
    href.addEventListener("click", (event)=>{
        event.preventDefault();
        let id = href.getAttribute('href')
        document.querySelector('' + id).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}