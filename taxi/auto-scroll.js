const containers = document.querySelectorAll('.adds');

containers.forEach((container) => {
  const items = container.querySelectorAll('.add');
  let index = 0;
  let autoScroll;
  
  function startAutoScroll() {
    autoScroll = setInterval(() => {
      index = (index + 1) % items.length;
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }, 3000);
  }
  
  function stopAutoScroll() {
    clearInterval(autoScroll);
  }
  
  // Stop scroll when user interacts
  container.addEventListener('touchstart', stopAutoScroll);
  container.addEventListener('mousedown', stopAutoScroll);
  
  // Restart scroll after user stops
  container.addEventListener('touchend', () => setTimeout(startAutoScroll, 4000));
  container.addEventListener('mouseup', () => setTimeout(startAutoScroll, 3000));
  
  // Start auto scroll for this container
  startAutoScroll();
});