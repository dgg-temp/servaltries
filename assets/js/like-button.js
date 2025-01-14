document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");
  const likeEmoji = document.getElementById("like-emoji");

  // Use the current URL as a unique key
  const postKey = `likeCount-${window.location.pathname}`;
  let count = localStorage.getItem(postKey) || 0;
  likeCount.textContent = count;

  if (likeButton) {
    likeButton.addEventListener("click", () => {
      count++;
      likeCount.textContent = count;

      // Save the count with the unique key
      localStorage.setItem(postKey, count);

      // Add animation
      likeEmoji.style.transform = "scale(1.3)";
      setTimeout(() => {
        likeEmoji.style.transform = "scale(1)";
      }, 200);
    });
  } else {
    console.error("Like button element not found!");
  }
});
