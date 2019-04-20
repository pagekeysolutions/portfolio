window.onload = main;

var slides;
var currentSlide;
var slideIndex = 0;

function main() {
  slides = document.querySelectorAll('.slide');
  currentSlide = document.querySelector("#current-slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].onclick = onclick_test;
  }
}

function onclick_test(e) {
  slides[slideIndex].setAttribute('id', '');
  slideIndex = (slideIndex + 1) % slides.length;

  slides[slideIndex].setAttribute('id', 'current-slide');
  slides[slideIndex].setAttribute('class', 'slide');
}
