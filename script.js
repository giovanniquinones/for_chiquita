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

// Media viewer functionality
const mediaViewer = document.querySelector(".media-viewer");
const mediaViewerContent = document.querySelector(".media-viewer-content");
const mediaViewerClose = document.querySelector(".media-viewer-close");
const clickableMedia = document.querySelectorAll(".clickable-media");

clickableMedia.forEach((item) => {
  item.addEventListener("click", () => {
    const mediaElement = item.querySelector("img, video");
    if (!mediaElement) return;

    // Clear previous content
    mediaViewerContent.innerHTML = "";

    // Clone the media element
    const clone = mediaElement.cloneNode(true);
    
    // If it's a video, ensure it has controls and isn't muted
    if (clone.tagName === "VIDEO") {
      clone.controls = true;
      clone.muted = false;
      clone.autoplay = true;
    }

    mediaViewerContent.appendChild(clone);
    mediaViewer.classList.add("active");
    mediaViewer.setAttribute("aria-hidden", "false");
  });
});

// Close media viewer
const closeMediaViewer = () => {
  mediaViewer.classList.remove("active");
  mediaViewer.setAttribute("aria-hidden", "true");
  mediaViewerContent.innerHTML = "";
};

mediaViewerClose.addEventListener("click", closeMediaViewer);
mediaViewer.addEventListener("click", (e) => {
  if (e.target === mediaViewer) {
    closeMediaViewer();
  }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mediaViewer.classList.contains("active")) {
    closeMediaViewer();
  }
});

