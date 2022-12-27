new Vue({
  el: "#add",
  data: {
      main_data: data
  } 
});









const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".header-pole");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector('a[href*="#open_modal"]');
const closeModalBtn = document.querySelector(".close-modal");



openModalBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(modal);
  let leftValue = parseInt(getStyle.left);
  let topValue = parseInt(getStyle.top);

  modal.style.left = `${leftValue + movementX}px`;
  modal.style.top = `${topValue + movementY}px`;
}

modal_body.addEventListener('mousedown', ()=>{
  modal_body.style.cursor = 'all-scroll';
  modal.addEventListener('mousemove', onDrag);
})

modal_body.addEventListener('mouseup', ()=>{
  modal_body.style.cursor = 'default';
  modal.removeEventListener('mousemove', onDrag);
})

