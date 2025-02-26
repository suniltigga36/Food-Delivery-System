document.addEventListener("DOMContentLoaded", function () {
  const restaurantList = document.getElementById("restaurant-list");
  const restaurants = [
    { name: "Tasty Bites", location: "Downtown" },
    { name: "Food Hub", location: "City Center" },
    { name: "Gourmet Delights", location: "Uptown" },
  ];

  restaurants.forEach((restaurant) => {
    const div = document.createElement("div");
    div.classList.add("restaurant");
    div.innerHTML = `<h3>${restaurant.name}</h3><p>Location: ${restaurant.location}</p>`;
    restaurantList.appendChild(div);
  });
});

// Move this outside so buttons can access it
const backgrounds = [
  "background.jpg",
  "background2.jpg",
  "background3.jpg",
  "background4.jpg",
];
let currentIndex = 0;

function changeBackground(direction) {
  currentIndex =
    (currentIndex + direction + backgrounds.length) % backgrounds.length;
  document.getElementById(
    "hero"
  ).style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),url('${backgrounds[currentIndex]}') no-repeat center center/cover`;
}

document.getElementById("logo").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default navigation

  let whiteScreen = document.getElementById("white-screen");

  // Show white screen with fade-in
  whiteScreen.style.display = "block";
  whiteScreen.style.opacity = "1";

  // After 2 seconds, reload the page
  setTimeout(() => {
    location.reload(); // Reload like pressing Ctrl+R
  }, 2000);
});