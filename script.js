//your JS code here. If required.
	let container = document.getElementById("bgContainer");

for(let i=0; i<800; i++){
  let boxDiv = document.createElement("div");
  boxDiv.setAttribute("class", "square");
  container.appendChild(boxDiv);

  boxDiv.addEventListener("mouseover", ()=>{
     const r = parseInt(Math.random() * 256);
     const g = parseInt(Math.random() * 256);
     const b = parseInt(Math.random() * 256);
    boxDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  })
  boxDiv.addEventListener("mouseout", ()=>{
     setTimeout(()=>{
      boxDiv.style.backgroundColor = `#1D1D1D`;
     }, 2000)
  })

}