let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");

let gradient1 = color1.value;
let gradient2 = color2.value;
color1.style.background = color1.value;
color2.style.background = color2.value;


body.style.background = `linear-gradient(to right, ${gradient1}, ${gradient2})`;

color1.addEventListener("input", (e) => {
	gradient1 = color1.value;
	body.style.background = `linear-gradient(to right, ${gradient1}, ${gradient2})`;
	color1.style.background = color1.value;
});

color2.addEventListener("input", (e) => {
	gradient2 = color2.value;
	body.style.background = `linear-gradient(to right, ${gradient1}, ${gradient2})`;
	color2.style.background = color2.value;
});
