document.addEventListener("DOMContentLoaded", function() {
  const bubblesContainer = document.querySelector(".bubbles");

  for (let i = 0; i < 128; i++) {
      let bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Randomize bubble properties
      let size = 2 + Math.random() * 4; // Random size
      let distance = 6 + Math.random() * 4; // Random travel distance
      let position = -5 + Math.random() * 110; // Random horizontal position
      let time = 2 + Math.random() * 2; // Random animation duration
      let delay = -1 * (2 + Math.random() * 2); // Random delay

      // Apply random properties to bubble
      bubble.style.setProperty('--size', `${size}rem`);
      bubble.style.setProperty('--distance', `${distance}rem`);
      bubble.style.setProperty('--position', `${position}%`);
      bubble.style.setProperty('--time', `${time}s`);
      bubble.style.setProperty('--delay', `${delay}s`);

      bubblesContainer.appendChild(bubble);
  }
});
