
document.addEventListener('DOMContentLoaded', function() {
  var box_container = document.querySelector(".box_container");
  var count = 0;

  box_container.addEventListener('click', changeGreen);

  var boxes = [];

  function changeGreen(e) {
    if (e.target !== e.currentTarget) {
      var box = e.target;
      if (box.style.backgroundColor !== 'green') { 
        box.style.backgroundColor = 'green';
        count++;
        boxes.push(e.target);
      }
    }

    if (count === 7) {
      count = 0;
      setTimeout(function() {
        changeYellow();
      }, 1000);
    }
    e.stopPropagation();
  }

  function changeYellow() {
    boxes.forEach(function(box, index) {
      setTimeout(function() {
        box.style.backgroundColor = 'yellow';
      }, index * 500)
    });
    setTimeout(function() {
      boxes = [];
    }, 0)
  }
});