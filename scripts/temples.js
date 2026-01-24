const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



const currentYear = document.querySelector('#currentYear');

const lastModified = document.querySelector("#lastModified");

const today = new Date();



document.getElementById("lastModified").innerHTML = document.lastModified;