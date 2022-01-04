const clearBtn = document.getElementById("clearBtn");
const grid = document.getElementById("grid");

let gridSize;

clearBtn.addEventListener("click", reset);

function makegrid (gridSize) {
    container.style.setProperty("--grid-rows", gridSize);
    container.style.setProperty("--grid-cols", gridSize);
    for (x = 0; x < gridSize * gridSize; x++) {
        let ele = document.createElement("div");
        grid.appendChild(ele).className = "ele";
  }
  document.querySelectorAll(".ele").forEach((ele) => ele.addEventListener("mouseover", colorChange));
}

function reset() {
    grid.querySelectorAll(".ele").forEach((ele) => ele.remove());
    let gridSize = prompt("Enter new grid size between 2 & 64");
    while (isNaN(gridSize) || gridSize > 64 || gridSize < 2) {
      gridSize = prompt("Invalid! Please select a size between 2-64");
    }
    makegrid(gridSize);
  }

function colorChange(){
  console.log("color changed");
  let opacity = Number(this.style.opacity);
  this.style.opacity = 0.1;
  this.style.backgroundColor = "black"; 

  if (this.style.opacity < 1) {
      this.style.opacity = opacity + 0.1;
  }
}
makegrid(16);
