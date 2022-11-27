//Header
function handleMobileMenuClick(type) {
  var menuElement = document.querySelector(`${type}`);
  menuElement.classList.toggle("show");
}

//Carousel
let slideIndex = 1;
showSlides(slideIndex);

function handleCarouselArrowClick(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image-container");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//Carousel end

//slider
let gallerySlider = tns({
  container: ".slider-images-container",
  slideBy: "1",
  speed: 500,
  nav: false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    420: {
      items: 1,
    },
  },
});
//slider end

function handleProductClick() {
  location.href = "/product.html";
}
