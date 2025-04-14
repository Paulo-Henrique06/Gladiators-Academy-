document.addEventListener("DOMContentLoaded", function () {
  // Botão de ação para rolar até a seção de motivação
  const btnAction = document.querySelector(".btn-action");
  btnAction.addEventListener("click", () => {
      document.querySelector(".info-section").scrollIntoView({
          behavior: "smooth"
      });
  });

  // Animações para as imagens da galeria ao rolar a página
  const galleryImages = document.querySelectorAll(".gallery-image");
  window.addEventListener("scroll", () => {
      galleryImages.forEach((image, index) => {
          const scrollPos = window.scrollY + window.innerHeight;
          const imagePos = image.offsetTop + image.offsetHeight / 2;
          if (scrollPos > imagePos) {
              image.style.transform = "scale(1.05)";
              image.style.opacity = 1;
          } else {
              image.style.transform = "scale(1)";
              image.style.opacity = 0.8;
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // Função para mudar a transparência da navbar ao rolar
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("transparent");
        } else {
            navbar.classList.remove("transparent");
        }
    });
});

// Lógica para alternar vídeos
const videoElement = document.getElementById("background-video");
const videos = [
    "../../videos/video1.mp4",    
    "../../videos/video2.mp4", 
    "../../videos/video3.mp4",
    "../../videos/video4.mp4",
    "../../videos/video5.mp4",
    "../../videos/video6.mp4"
]; // Lista de vídeos

let currentVideoIndex = 0;

function changeVideo() {
    videoElement.style.opacity = 0; // Suaviza a saída do vídeo atual

    setTimeout(() => {
        // Muda para o próximo vídeo
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoElement.src = videos[currentVideoIndex];
        videoElement.style.opacity = 1; // Suaviza a entrada do próximo vídeo
    }, 1500); // Tempo para a transição (1.5s deve combinar com o CSS)
}

// Muda o vídeo ao final de cada reprodução
videoElement.addEventListener("ended", changeVideo);

// Inicializa o primeiro vídeo
videoElement.src = videos[currentVideoIndex];