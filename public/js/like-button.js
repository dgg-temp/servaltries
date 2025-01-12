document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");
  const likeEmoji = document.getElementById("like-emoji");

  // Ensure elements are found
  if (!likeButton || !likeCount || !likeEmoji) {
    console.error("Like button elements not found!");
    return;
  }

  // Initialize the like count
  let count = localStorage.getItem("likeCount") || 0;
  likeCount.textContent = count;

  // Add click event listener
  likeButton.addEventListener("click", () => {
    count++;
    likeCount.textContent = count;

    // Save count to localStorage
    localStorage.setItem("likeCount", count);

    // Add animation
    likeEmoji.style.transform = "scale(1.3)";
    setTimeout(() => {
      likeEmoji.style.transform = "scale(1)";
    }, 200);
  });
});
