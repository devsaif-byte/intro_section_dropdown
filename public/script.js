const categories = document.querySelector(".list-categories");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const mobileMenu = document.querySelector("#mobile--menu");

categories.addEventListener("click", (e) => {
	console.log(e.target);
	// console.log(e.target.nextElementSibling.classList.toggle("hidden"));
	// console.log(features.nextElementSibling.classList.add("hidden"));
	// console.log(company.nextElementSibling.classList.add("hidden"));
});

// features.addEventListener("click", function (e) {
// 	console.log(e.target.nextElementSibling.classList.toggle("hidden"));
// });
// company.addEventListener("click", function (e) {
// 	console.log(e.target.nextElementSibling.classList.toggle("hidden"));
// 	console.log(e.target.previousSibling);
// });

mobileMenu.addEventListener("click", (e) => {
	console.log(e);
});
