
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const total = images.length;
    const carouselImages = document.querySelector(".carousel-images");
    const carousel = document.getElementById("carousel");

    function showSlide(index) {
      if (index >= total) currentIndex = 0;
      else if (index < 0) currentIndex = total - 1;
      else currentIndex = index;

      carouselImages.style.transform = `translateX(-${currentIndex * 800}px)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    // Lecture automatique
    let interval = setInterval(nextSlide, 3000);

    // Pause au survol
    carousel.addEventListener("mouseover", () => clearInterval(interval));
    carousel.addEventListener("mouseout", () => interval = setInterval(nextSlide, 3000));
  
