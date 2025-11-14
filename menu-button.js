
document.addEventListener("DOMContentLoaded", function() {
  var menui = document.querySelector(".round");
  var menuItem = document.querySelector(".menu-items");
  var lines = document.querySelectorAll(".line");
  var menuOpen = false;

  menui.addEventListener("click", function() {
    if (!menuOpen) {
      menui.style.marginLeft = "90%";
      menui.style.marginTop = "0";
      menui.style.backgroundColor="#0A0A0AA8"
      menui.style.borderColor = "black";
      menuItem.style.visibility = "visible";
      menui.style.transform="scaleX(100%)"
      menui.style.transition="transform 1s"

      var fx = lines[0];
      var sx = lines[1];
      var tx = lines[2];
      sx.style.width="12vw"
      fx.style.width="12vw"
      sx.style.marginTop = "-11px";
      fx.style.marginTop = "13px";
      tx.style.visibility = "hidden";
      sx.style.transform = "rotate(45deg)";
      fx.style.transform = "rotate(-45deg)";
      sx.style.backgroundColor = "red";
      fx.style.backgroundColor = "red";
      sx.style.borderColor="red"
      fx.style.borderColor="red"
      fx.style.transition = "transform 0.4s";
      sx.style.transition = "transform 0.4s";
      menuOpen = true;
    } 
    else {
      menui.style.marginLeft = "4%";
      menui.style.marginTop = "0";
      menui.style.borderColor = "black";
      menui.backgroundColor="#0A0A0AA8"
      menui.style.transition="transform1s"
      menuItem.style.visibility = "hidden";

      var fx = lines[0];
      var sx = lines[1];
      var tx = lines[2];
      sx.style.width="14vw"
      fx.style.width="10vw"
      sx.style.backgroundColor = "white";
      fx.style.backgroundColor = "white";
      sx.style.borderColor="white"
      fx.style.borderColor="white"
      sx.style.transform = "rotate(0deg)";
      fx.style.transform = "rotate(0deg)";
      fx.style.transition = "transform 0.4s";
      sx.style.transition = "transform 0.4s";
      sx.style.marginTop = "0px";
      fx.style.marginTop = "0px";
      tx.style.visibility = "visible";
      tx.style.transition = "opacity 0.4s";
      menuOpen = false;
    }
  });
});
