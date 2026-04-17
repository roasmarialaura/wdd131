

const mainnav = document.querySelector("nav");
const hambutton = document.querySelector("#menu");

if (hambutton && mainnav) {
  hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
  });
}


const informationHome = {

  "Place": "Carlos Paz",
  "Distance": "About 35–40 km from Córdoba Capital",
  "Activities": "Waterfront and beaches of Lake San Roque, city center with bars, clubs, and theaters (vibrant nightlife), Cuckoo Clock, Chairlift and trekking to Cerro de la Cruz",
  "Accommodation":"budget: $10 - $20 per night, mid-range: $20 - $54",
  "Food": "$4 – $ 8 per person",
};

const informationHomeList = document.getElementById("informationHomeList");

for (let key in informationHome) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${key}:</strong> ${informationHome[key]}`;
  informationHomeList.appendChild(li);
}



const products = [
  {
    id: "mountain",
    name: "Mountain",
  },
  {
    id: "river",
    name: "River",
  },
  {
    id: "city",
    name: "City", 
  },
  {
    id: "Combination",
    name: "Combination",
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

const form = document.querySelector(".contactUs-form");
if (form) {
  form.addEventListener("submit", (e) => {
    let reviewCount = Number(localStorage.getItem("reviewCount") || 0);
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    console.log(`Total reviews submitted: ${reviewCount}`);
  });
}






//Foother
let today = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${today.getFullYear()}`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
