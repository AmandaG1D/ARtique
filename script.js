// Function to change header opacity on scroll
window.addEventListener("scroll", function () {
  const headerWrapper = document.querySelector(".header-wrapper");
  if (window.scrollY > 50) {
    headerWrapper.classList.add("scrolled");
  } else {
    headerWrapper.classList.remove("scrolled");
  }
});

// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Auto slide every 5 seconds
setInterval(nextImage, 5000);

// Initialize on load
showImage(currentIndex);

// Submit Comment Function
function submitComment() {
  const username = document.getElementById("username").value.trim();
  const commentText = document.getElementById("commentText").value.trim();
  const ratingInputs = document.querySelectorAll('.rating input');
  let selectedRating = 0;

  ratingInputs.forEach((input) => {
    if (input.checked) {
      selectedRating = parseInt(input.value);
    }
  });

  if (commentText === "") {
    alert("Please enter a comment before submitting.");
    return;
  }

  if (selectedRating === 0) {
    alert("Please select a rating before submitting.");
    return;
  }

  const commentSection = document.getElementById("comments");
  const displayName = username !== "" ? username : "Anonymous";

  const newComment = document.createElement("div");
  newComment.classList.add("comment-box");

  const stars = '⭐'.repeat(selectedRating);
  newComment.innerHTML = `<strong>${displayName}</strong> - <span>${stars}</span><br>${commentText}`;

  commentSection.appendChild(newComment);

  document.getElementById("username").value = "";
  document.getElementById("commentText").value = "";
  ratingInputs.forEach(input => input.checked = false);
}

// AR Try-On Button
function openARExperience() {
  window.location.href = "https://lens.snap.com/experience/0093b63b-d663-426d-95f6-c294f5aa22de";
}

// Toggle Mobile Navigation Menu
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}