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
      icon.style.marginLeft = "60%"; // Reset icon margin left (optional)

      var fx = lines[0]
      var sx = lines[1]
      var tx = lines[2]
      sx.style.marginTop = "-13.5px";
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
      icon.style.marginLeft = "69%"; // Reset icon margin left (optional)

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



// automatic option showing in the find the best hot
document.addEventListener("DOMContentLoaded", function() {
  const select = document.getElementById("destination");
  const heading = document.querySelector(".h1");
  
  select.addEventListener("change", function() {
    heading.textContent = "FIND THE BEST HOTEL IN " + this.value.toUpperCase();
  });
});


document.addEventListener("DOMContentLoaded",
  function () {
    const viewport = document.querySelectorAll(".hotel")
    function scaleHotels() {
  const hotels = document.querySelectorAll('.hotel');
  const center = window.innerWidth / 2;
  
  hotels.forEach(hotel => {
    const rect = hotel.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const distance = Math.abs(center - itemCenter);
    
    if (distance < rect.width / 2) {
      hotel.style.opacity = '1'
      hotel.style.transform = 'scale(1)';
      hotel.style.transition = 'transform 0.5s ease';
    } else {
      hotel.style.opacity = '0.5'
      hotel.style.transform = 'scale(0.7)';
      hotel.style.transition = 'transform 0.5s ease';
    }
  });
}

document.querySelector('.hotels').addEventListener('scroll', scaleHotels);
window.addEventListener('resize', scaleHotels);
window.addEventListener('load', scaleHotels);
  });
