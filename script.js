//your JS code here. If required.
let box1 = document.querySelector(".box-1");
	let cont = document.querySelector(".container");

	for (let i = 0; i < 900; i++) {
		let box = document.createElement("div");
		box.classList.add("square");
		cont.appendChild(box);

		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);

		box.addEventListener("mouseenter", function () {
			box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});

		box.addEventListener("mouseleave", function () {
			setTimeout(function () {
				box.style.backgroundColor = "rgb(29, 29, 29)";
			}, 1000);
		});
	}