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

// rate chart toggle to para

// எல்லா car h3 tags select பண்ணுறோம் (id அல்ல, tag/class name சரியாக எழுதணும்)
const cards = document.querySelectorAll('.car');
const paras = document.querySelectorAll('.para');

// ஒவ்வொரு carக்கும் event listener add பண்ணுறோம்
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    const para = paras[index]; // அதே index-க்கு உரிய paragraph
    
    if (para.style.display === 'block') {
      para.style.display = 'none';
    } else {
      para.style.display = 'block';
    }
  });
});