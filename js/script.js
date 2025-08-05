function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("yes");
  var z = document.getElementById("dot");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="inline-block";
    z.style="font-size:5vw;-webkit-text-stroke-width: 0;";
  } else {
    y.style.display="none";
    z.style="font-size:5vw; color: transparent;-webkit-text-stroke-width: calc(3.5vmax/50);";
    x.style="width:20vw;padding-top:5vw;display:block; float:left; color: transparent;-webkit-text-stroke-width: calc(3.5vmax/50);";
  }
}
function openDesc(theid) {console.log(theid); var x = document.getElementById(theid);if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}}
