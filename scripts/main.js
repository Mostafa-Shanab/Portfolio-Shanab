// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.querySelectorAll("a").forEach((link) => {
  link.setAttribute("target", "_blank");
  // Optional: Add rel="noopener noreferrer" for security
  link.setAttribute("rel", "noopener noreferrer");
});
