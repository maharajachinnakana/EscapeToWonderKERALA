document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".toggle-header");

  headers.forEach(header => {
    header.addEventListener("click", function () {
      let content = header.nextElementSibling;

      // 🔍 Loop until we find a .toggle-content or run out of elements
      while (content && !content.classList.contains("toggle-content")) {
        content = content.nextElementSibling;
      }

      // ✅ Now toggle only if found
      if (content) {
        content.classList.toggle("active");
      }
    });
  });
});