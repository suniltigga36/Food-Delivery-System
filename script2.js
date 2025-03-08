document.addEventListener("DOMContentLoaded", function () {
  const restaurantList = document.getElementById("restaurants");

  const restaurants = [
    { name: "Tasty Bites", location: "Downtown", image: "rest1.jpg" },
    { name: "Food Hub", location: "City Center", image: "rest2.jpg" },
    { name: "Gourmet Delights", location: "Uptown", image: "rest3.jpg" },
  ];

  restaurants.forEach((restaurant) => {
    const div = document.createElement("div");
    div.classList.add("restaurant-card");
    div.innerHTML = `
         <img src="${restaurant.image}" alt="${restaurant.name}" style="width:100%; border-radius:5px;">
         <h3>${restaurant.name}</h3>
         <p>Location: ${restaurant.location}</p>
         <a href="#">View Menu</a>
       `;
    restaurantList.appendChild(div);
  });

  document.getElementById("searchBtn").addEventListener("click", function () {
    alert("Search functionality coming soon!");
  });

  document.getElementById("exploreBtn").addEventListener("click", function () {
    alert("Explore more restaurants soon!");
  });
});
