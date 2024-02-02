   // JavaScript to slide in the content when the page is fully loaded
   window.addEventListener("load", function() {
    const content = document.querySelector('.slide-in');
    content.classList.add('show'); // Add class to trigger animation
    document.body.style.overflow = "auto"; // Restore overflow after animation
});
    