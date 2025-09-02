//your JS code here. If required.
	let cont = document.querySelector(".container");

	for (let i = 0; i < 800; i++) {
		let box = document.createElement("div");
		box.classList.add("square");
		cont.appendChild(box);

		box.addEventListener("mouseenter", function () {
			const r = Math.floor(Math.random() * 255);
			const g = Math.floor(Math.random() * 255);
			const b = Math.floor(Math.random() * 255);
			box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});

		box.addEventListener("mouseleave", function(){
			setTimeout(function() {
				box.style.backgroundColor = "rgb(29, 29, 29)"
			}, 1000);
		});
	}