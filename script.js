// ハンバーガーメニューのトグル
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// スライダーの実装
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const sliderWrap = document.querySelector('.slider-wrap');
const prevButton = document.querySelector('.slide-btn--prev');
const nextButton = document.querySelector('.slide-btn--next');

let currentSlide = 1;
let slideInterval = null;

function showSlide(index) {
  // インデックスが範囲外にならないよう調整
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;
  
  // 横方向にスライド
  sliderWrap.style.transform = `translateX(-${100 * currentIndex}%)`;
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

// 次へ
function nextSlide() {
  showSlide(currentIndex + 1);
}

// 前へ
function prevSlide() {
  showSlide(currentIndex - 1);
}

// 3秒ごとにスライドを切り替え
slideInterval = setInterval(nextSlide, 3222);

function startAutoSlide() {
  // もし既にIntervalがセットされていたらクリアしてから新しくセット
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  slideInterval = setInterval(nextSlide, 3222);
}

nextButton.addEventListener('click', () => {
  nextSlide();       // 次スライドへ
  startAutoSlide();  // タイマーをリセットして再スタート
});
prevButton.addEventListener('click', () => {
  prevSlide();
  startAutoSlide();
});


// 初期表示
showSlide(currentSlide);
