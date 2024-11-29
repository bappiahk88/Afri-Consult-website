// Handle hovering over regions
const regions = document.querySelectorAll(".region");
const regionInfo = document.getElementById("region-info");

regions.forEach((region) => {
  // Hover effect
  region.addEventListener("mouseover", () => {
    const info = region.getAttribute("data-info");
    regionInfo.textContent = info; // Update region info
  });

  // Reset on mouse out
  region.addEventListener("mouseout", () => {
    regionInfo.textContent = "Hover over a region to learn more!";
  });

  // Click event to show more details
  region.addEventListener("click", () => {
    alert(`More details about ${region.getAttribute("data-info")}`);
    // You can redirect to a detailed page here if needed
  });
});

// Real-Time Counter Animation
function animateCounter(id, start, end, duration) {
  let obj = document.getElementById(id);
  let current = start;
  let range = end - start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

window.onload = () => {
  animateCounter("projects-counter", 0, 120, 2000);
  animateCounter("users-counter", 0, 5000, 2000);
  animateCounter("technologies-counter", 0, 50, 2000);
};
