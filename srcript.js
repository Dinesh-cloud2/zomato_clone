// Live search
document.getElementById("search").addEventListener("input", () => {
  const query = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".restaurant-card").forEach(card => {
    const name = card.querySelector(".restaurant-name").textContent.toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});

// Rating stars
document.querySelectorAll(".rating").forEach(rating => {
  rating.addEventListener("click", e => {
    if (e.target.classList.contains("star")) {
      const value = e.target.dataset.value;
      rating.querySelectorAll(".star").forEach(star => {
        star.classList.toggle("active", star.dataset.value <= value);
      });
    }
  });
});

// Favorite button
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("favorited");
  });
});

// Order button
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Order placed! (Just a demo 😄)");
  });
});

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});