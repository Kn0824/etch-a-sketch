const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";
for(let i = 0; i < 16; i++) {
    let columnHolder = document.createElement("div");
    columnHolder.style.display = "flex";
    columnHolder.classList.add("column")
    container.appendChild(columnHolder);
    for(let j = 0; j < 16; j++) {
        let newGridSquare = document.createElement("div");
        columnHolder.appendChild(newGridSquare);
        newGridSquare.classList.add("row");
        newGridSquare.addEventListener('mouseover', function() {
            newGridSquare.style.backgroundColor = "black";
        });
    }
}

let pixels = document.getElementById("sizeChange");

const confirmButton = document.querySelector(".confirmSize");
confirmButton.addEventListener('click', function () {
    pixelChange();
});

function deleteContainer() {
    deletedContainer = document.querySelector(".container");
    deletedContainer.remove();
}

function createContainer(pixelsValue1) {
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    const body = document.querySelector("body");
    body.appendChild(container);
    for(let i = 0; i < pixelsValue1; i++) {
        let columnHolder = document.createElement("div");
        columnHolder.style.display = "flex";
        columnHolder.classList.add("column")
        container.appendChild(columnHolder);
        for(let j = 0; j < pixelsValue1; j++) {
            let newGridSquare = document.createElement("div");
            columnHolder.appendChild(newGridSquare);
            newGridSquare.classList.add("row");
            newGridSquare.addEventListener('mouseover', function() {
                newGridSquare.style.backgroundColor = "black";
            });
        }
    }
}

function pixelChange() {
    if(parseInt(pixels.value) > 100) {
        pixels.value = 100;
    }
    if(parseInt(pixels.value) < 2) {
        pixels.value = 2;
    }
    let pixelsValue = parseInt(pixels.value);

    deleteContainer();

    createContainer(pixelsValue);

}