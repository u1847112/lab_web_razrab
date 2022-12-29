const modal = document.querySelector(".modal");
const drag_zone = document.querySelector(".top-modal");
const bg = document.querySelector(".ground-modal");
const openModalBtn = document.querySelector('#login');
const closeModalBtn = document.querySelector("#close-modal");



openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";
  bg.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  bg.style.display = "none";
});

drag_zone.onmousedown = function(e) {
  var coords = getCoords(modal);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;  
 
  modal.style.left = e.pageX - shiftX + 'px';
  modal.style.top = e.pageY - shiftY + 'px';

  document.onmousemove = function(e) {
    modal.style.left = e.pageX - shiftX + 'px';
    modal.style.top = e.pageY - shiftY + 'px';
  };

  drag_zone.onmouseup = function() {
    document.onmousemove = null;
    drag_zone.onmouseup = null;
  };
document.body.appendChild(modal);
}

drag_zone.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

