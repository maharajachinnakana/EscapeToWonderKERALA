const bookNowBtn = document.getElementById("bookBtn");
const bookBox = document.getElementById("bookBox");
const closeBtn = document.querySelector(".x");
const ownerNumber = "919497665450"; // Your WhatsApp number (without +)

// BOOK NOW → open box
bookNowBtn.addEventListener("click", () => {
  // if not active → open the box
  if (!bookBox.classList.contains("active")) {
    bookBox.classList.add("active");
    bookNowBtn.textContent = "SEND ENQUIRY";
    bookNowBtn.style.fontSize="2rm";
  } 
  // if already active → send to WhatsApp
  else {
    // get input values
    const service = document.querySelector('input[name="service"]:checked');
    const car = document.querySelector('input[name="cars"]:checked');
    const date = document.getElementById("date").value;
    const persons = document.getElementById("passengers").value;

    // prepare message
    const msg = `*New Taxi Enquiry*\n\n` +
      `🚗 Service Type: ${service ? service.value : "Not selected"}\n` +
      `📅 Date: ${date || "Not mentioned"}\n` +
      `🚘 Car Type: ${car ? car.value : "Not selected"}\n` +
      `👥 Persons: ${persons || "Not given"}\n\n` +
      `Please confirm the availability.`;

    // open WhatsApp
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }
});

// CLOSE (X) button → close box
closeBtn.addEventListener("click", () => {
  bookBox.classList.remove("active");
  bookNowBtn.textContent = "BOOK NOW";
});

//insta fb youtube call up and down
  const extra = document.querySelector('.extra');
  let inactivityTimer;

  // Function to reset the timer when user is active
  function resetExtraTimer() {
    clearTimeout(inactivityTimer);
    extra.classList.remove('active'); // hide animation when user active

    // If user is idle for 3 seconds
    inactivityTimer = setTimeout(() => {
      extra.classList.add('active'); // show animation
    }, 3000);
  }

  // Detect user activity (touch, scroll, move)
  window.addEventListener('scroll', resetExtraTimer);
  window.addEventListener('touchstart', resetExtraTimer);
  window.addEventListener('mousemove', resetExtraTimer);

  // Start the timer initially
  resetExtraTimer();
  
  
  //click to connect pages and call page up and page down
    // 👉 Instagram
  function openInstagram() {
    window.open("https://www.instagram.com/escape_tourisms", "_blank");
  }
  
  // 👉 Facebook
  function openFacebook() {
    window.open("https://www.facebook.com/https://www.facebook.com/share/1CfQtRo5hG/", "_blank");
  }
  
  // 👉 YouTube
  function openYouTube() {
    window.open("https://www.youtube.com/@your_channel_here", "_blank");
  }
  
  // 👉 Call directly
  function makeCall() {
    window.location.href = "tel:+919497665450"; // Change to your real number
  }
  
  // 👉 Scroll controls
  function scrollPage(direction) {
    if (direction === "up") {
      window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
    } else if (direction === "down") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  }


