const cursor = document.querySelector('.cursor');
var timeout;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.display = 'block';

  //stop animation
  function mouseStopped(){
    cursor.style.display = 'none';
  }

  //hide animation
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);

});

// stop animation on the screen
document.addEventListener("mouseout", () => {
  cursor.style.display = 'none';
});
