// Dynamic industry info based on dropdown selection
document.getElementById("industry").addEventListener("change", function() {
  const industryInfo = document.getElementById("industryInfo");
  const industry = this.value;

  switch (industry) {
    case "healthcare":
      industryInfo.textContent = "AI can help predict diseases, manage patient records, and enhance diagnostics.";
      break;
    case "agriculture":
      industryInfo.textContent = "AI optimizes crop yields, weather forecasting, and supply chain management.";
      break;
    case "finance":
      industryInfo.textContent = "AI enhances fraud detection, credit scoring, and customer insights.";
      break;
    case "education":
      industryInfo.textContent = "AI personalizes learning experiences and automates administrative tasks.";
      break;
    default:
      industryInfo.textContent = "";
  }
});

// Submit button confirmation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  alert("Thank you for reaching out! We’ll get back to you soon.");
});
