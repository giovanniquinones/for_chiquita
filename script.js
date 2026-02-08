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
const loveModal = document.querySelector(".love-modal");

if (loveButton && loveModal) {
  loveButton.addEventListener("click", () => {
    document.body.classList.add("love-active");
    loveModal.setAttribute("aria-hidden", "false");
  });

  loveModal.addEventListener("click", () => {
    document.body.classList.remove("love-active");
    loveModal.setAttribute("aria-hidden", "true");
  });
}

