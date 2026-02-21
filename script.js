// MENU
const burger = document.getElementById("burger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

burger.onclick = () => {
  sideMenu.classList.toggle("open");
  overlay.classList.toggle("active");
};

overlay.onclick = () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("active");
};

// DARK MODE
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("dark");

// DONACIONES
let total = 0;
const goal = 50;
const bar = document.getElementById("donationBar");

document.querySelectorAll("[data-amount]").forEach(btn => {
  btn.onclick = () => {
    total += Number(btn.dataset.amount);
    bar.style.width = Math.min((total / goal) * 100, 100) + "%";
  };
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
});

document.querySelectorAll(".section").forEach(s => observer.observe(s));
