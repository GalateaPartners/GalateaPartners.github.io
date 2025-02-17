// ハンバーガーメニューのトグル
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// スライダーの簡易実装
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active-dot");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    currentSlide = idx;
    showSlide(currentSlide);
  });
});

// 3秒ごとにスライドを切り替え
setInterval(nextSlide, 3000);

// 初期表示
showSlide(currentSlide);
