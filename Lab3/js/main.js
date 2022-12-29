let on = document.querySelector('.color-btn');
let list = document.querySelectorAll('.iteam');
let hrefs = document.querySelector('.first-category')

on.onclick = function(){
    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){
            list[i].style.backgroundColor = 'rgba(177, 175, 175, 0.384)';
        }
    }    
}


hrefs.onclick = (event)=>{
    event.preventDefault();
    let id = hrefs.getAttribute('href')
    document.querySelector('' + id).scrollIntoView({
        block: "start"
    })
}