function yap() {
  document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    const yap = document.getElementById("yappin")
    const closed = document.getElementById("closed")
    if (keyPressed === ' ') {
      yap.hidden = false;
      closed.hidden = true;
    }
  });
document.addEventListener('keyup', function(event) {
    const keyPressed = event.key;
    const yap = document.getElementById("yappin")
    const closed = document.getElementById("closed")
    const meeps = document.getElementsByClassName("meep");

    if (keyPressed === ' ') {
      yap.hidden = true;
      closed.hidden = false;
      console.log(Math.floor(Math.random() * 10));
      meeps[Math.floor(Math.random() * 10)].play();
    }
  });
}

yap();