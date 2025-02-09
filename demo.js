
var menui = document.querySelector(".round");
var menuItem = document.querySelector(".menu-items");
var icon = document.querySelector(".icon");
var lines= document.querySelectorAll(".line")
var menuOpen = false;
function menu() {
  // Scale the round button
  if (!menuOpen){
      menui.style.marginLeft = "90%"
      menui.style.marginTop = "-15px"
      menui.style.borderColor = "transparent"
      menuItem.style.visibility = "visible"
  // Adjust the icon margin left
      icon.style.marginLeft = "0"; // Reset icon margin left (optional)

      var fx = lines[0]
      var sx = lines[1]
      var tx = lines[2]
      sx.style.marginTop = "-15px";
      fx.style.marginTop = "15px";
      tx.style.visibility = "hidden";
      sx.style.transform = "rotate(45deg)"
      fx.style.transform = "rotate(-45deg)"
      sx.style.backgroundColor = "red"
      fx.style.backgroundColor = "red"
      fx.style.transition = "transform 2s"
      sx.style.transition = "transform 2s"
      menuOpen = true;
      
  }
  else {
     menui.style.marginLeft = "0%"
      menui.style.marginTop = "0px"
      menui.style.borderColor = "transparent"
      menuItem.style.visibility = "hidden"
      // Adjust the icon margin left
      icon.style.marginLeft = "87%"; // Reset icon margin left (optional)

      var fx = lines[0]
      var sx = lines[1]
      var tx = lines[2]
      sx.style.backgroundColor = "navajowhite"
      fx.style.backgroundColor = "navajowhite"
      sx.style.transform = "rotate(0deg)"
      fx.style.transform = "rotate(0deg)"
      fx.style.transition = "transform 2s"
      sx.style.transition = "transform 2s"
      sx.style.marginTop = "0px";
      fx.style.marginTop = "0px";
      tx.style.visibility = "visible";
      tx.style.transition = "opacity 2s"
      menuOpen = false;
    
  }
}