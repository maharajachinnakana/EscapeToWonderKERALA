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
      
  //selecting the round
  //selecting the line
  //selecting the menu items 
  var round=document.querySelector(.round)
  var line=document.querySelectorAll(.line)
  var menu=document.querySelector(.menu-items)
  function menubar() {
    round.style.width(200px)
    round.style.height(200px)
    round.style.
  }