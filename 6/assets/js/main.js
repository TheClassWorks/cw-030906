console.log(Math.floor(Math.random() * 255));

setInterval(function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}, 2000);
