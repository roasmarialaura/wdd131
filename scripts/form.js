
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];



const productSelect = document.getElementById("product-name");
if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

const form = document.querySelector(".product-form");
if (form) {
  form.addEventListener("submit", (e) => {
    let reviewCount = Number(localStorage.getItem("reviewCount") || 0);
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    console.log(`Total reviews submitted: ${reviewCount}`);
  });
}

const stars = document.querySelectorAll(".star-option .stars");
stars.forEach((star, idx) => {
  star.addEventListener("click", () => {
    stars.forEach(s => s.style.color = "black");
    for (let i = 0; i <= idx; i++) {
      stars[i].style.color = "rgb(76, 0, 255)";
      document.getElementById(`star${i+1}`).checked = true;
    }
  });
});

/*st productSelect = document.getElementById("product-name");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;       // El id como value
  option.textContent = product.name; // El nombre como texto visible
  productSelect.appendChild(option);
});

// Manejo del contador de reseñas en localStorage
document.addEventListener("DOMContentLoaded", () => {
  // Recuperar el contador desde localStorage
  let reviewCount = localStorage.getItem("reviewCount") || 0;

  // Incrementar el contador y guardarlo
  reviewCount = Number(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);

  console.log(`Total reviews submitted: ${reviewCount}`);
});*/

const currentYear = document.querySelector('#currentYear');

const lastModified = document.querySelector("#lastModified");

const today = new Date();



document.getElementById("lastModified").innerHTML = document.lastModified;