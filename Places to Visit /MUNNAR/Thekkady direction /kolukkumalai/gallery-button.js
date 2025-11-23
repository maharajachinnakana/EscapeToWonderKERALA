document.addEventListener('DOMContentLoaded', () => {
  // Create blur overlay and append to body
  const overlay = document.createElement('div');
  overlay.classList.add('gallery-overlay');
  document.body.appendChild(overlay);
  
  // Helper to show image by index
  function showImage(images, index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }
  
  // For multiple galleries on page
  const galleryButtons = document.querySelectorAll('.galary-button');
  galleryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const container = button.closest('.box');
      if (!container) return;
      
      const gallery = container.querySelector('.galary');
      const closeBtn = container.querySelector('.close-btn');
      const leftBtn = container.querySelector('.left');
      const rightBtn = container.querySelector('.right');
      const images = gallery.querySelectorAll('.images');
      let currentIndex = 0;
      
      // Show gallery and overlay
      gallery.style.display = 'flex';
      closeBtn.style.display = 'block';
      leftBtn.style.display = 'block';
      rightBtn.style.display = 'block';
      overlay.style.display = 'block';
      
      showImage(images, currentIndex);
      
      // Close gallery and hide overlay
      function closeGallery() {
        gallery.style.display = 'none';
        closeBtn.style.display = 'none';
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
        overlay.style.display = 'none';
      }
      
      closeBtn.onclick = closeGallery;
      overlay.onclick = closeGallery;
      
      // Left button click - previous image
      leftBtn.onclick = () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(images, currentIndex);
      };
      
      // Right button click - next image
      rightBtn.onclick = () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(images, currentIndex);
      };
    });
  });
});