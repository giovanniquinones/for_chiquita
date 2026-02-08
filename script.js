const hearts = document.querySelectorAll(".floating-hearts span");

hearts.forEach((heart) => {
  const size = 12 + Math.random() * 14;
  const duration = 6 + Math.random() * 6;
  const delay = Math.random() * 4;
  const drift = Math.random() * 40 - 20;

  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.setProperty("--drift", `${drift}px`);
});

const loveButton = document.querySelector(".cta");

if (loveButton) {
  loveButton.addEventListener("click", () => {
    document.body.classList.toggle("love-active");
  });
}

