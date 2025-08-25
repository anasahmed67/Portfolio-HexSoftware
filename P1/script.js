const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("active");

  // Toggle hamburger icon between ☰ and ✖
  if (navUl.classList.contains("active")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});

// Close menu when clicking a link
document.querySelectorAll(".nav-ul a").forEach(link => {
  link.addEventListener("click", () => {
    navUl.classList.remove("active");
    hamburger.textContent = "☰";
  });
});
