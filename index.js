   const divs = document.querySelectorAll('.display-box > .display-img');
  const anchors = document.querySelectorAll('.anchor');
  const displayContainer = document.querySelector('.display');
  let currentIndex = 0;
  let scrollInterval;
  let hoverTimeout;

  // Create an observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = [...divs].indexOf(entry.target);
      if (entry.isIntersecting) {
        anchors[index].classList.add('active');
      } else {
        anchors[index].classList.remove('active');
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold for when the section is considered visible

  // Observe each section
  divs.forEach(div => observer.observe(div));

  // Automatic scrolling function
  function autoScroll() {
    currentIndex = (currentIndex + 1) % divs.length;
    divs[currentIndex].scrollIntoView({ behavior: 'smooth',block:'nearest' });
  }

  // Start automatic scrolling
  function startAutoScroll() {
    if (!scrollInterval){
      scrollInterval = setInterval(autoScroll, 3000); // Adjust the interval as needed
    }
  }

  // Stop automatic scrolling
  function stopAutoScroll() {
    if (scrollInterval){
      clearInterval(scrollInterval);
      scrollInterval=null
    }
  }

  // Restart automatic scrolling with delay
  function restartAutoScroll() {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(startAutoScrol, 3000); 
  }
    
  // Event listeners for hover
  displayContainer.addEventListener('mouseenter', stopAutoScroll);
  displayContainer.addEventListener('mouseleave', restartAutoScroll);
  displayContainer.addEventListener('touchmove',stopAutoScroll);
  displayContainer.addEventListener('touchend',startAutoScroll);

let lastScrollY = window.scrollY;

const check = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let currentScrollY = window.scrollY;
    
    if (entry.isIntersecting) {
      startAutoScroll()
      console.log('enterd')
    } else {
      stopAutoScroll()
      console.log('exited')
    }
    
    lastScrollY = currentScrollY;
  });
}, { threshold: 0.5 });

check.observe(displayContainer);
  // Initialize automatic scrolling
  startAutoScroll();
  
  
      document.querySelectorAll('.toggle-header').forEach(function(header) {
        header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      });

        function toggleFields() {
          var service = document.getElementById("service").value;
          var additionalFields = document.getElementById("additional-fields");

          if (service) {
            additionalFields.classList.remove("hidden");
          } else {
            additionalFields.classList.add("hidden");
          }
        }
        
        
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
      sx.style.marginTop = "-12px";
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

//booknow
let backgroundBox=document.querySelector('.book-now')
let form=document.querySelector('.form-content')
let hidden=document.querySelector('.hidden')
function openForm() {
  const heading= document.getElementById('book-now')
  heading.textContent='FILLING FORM'
  heading.style.width='98%'
  heading.style.backgroundColor='white'
  heading.style.color='red'
  heading.style.textShadow='1px 1px 0.5px black'
  heading.style.position='absolute'
  heading.style.top='13%'
  heading.style.right='1%'
  backgroundBox.style.position='absolute'
  backgroundBox.style.top='0'
  backgroundBox.style.right='1%'
  backgroundBox.style.height='100%'
  backgroundBox.style.backgroundColor='#000000C9'
  backgroundBox.style.zIndex='1'
  form.style.display='block'
    
  // Tab to edit
}


