document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("banner-animated");
    image.classList.add("show"); // Adiciona a classe que torna visível
  });

document.addEventListener("scroll", function () {
    const image = document.getElementById("banner-animated");
    const rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      image.classList.add("show");
    }
});
  