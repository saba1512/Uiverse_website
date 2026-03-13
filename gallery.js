const galleryCards = document.querySelector('#gallery-cards');
const addBtn2 = document.querySelector('#add-btn');
let count = 1;

addBtn2.addEventListener('click', () => {
    const itemDiv = document.createElement("div")
    itemDiv.classList.add("item-card")

    const createP = document.createElement("p")
    createP.textContent =  `${count++} Item`
    // const p = document.createElement("p")
    // p.textContent = "new item"

    const delateBtn = document.createElement("button")
    delateBtn.textContent = "delete"
    delateBtn.classList.add("delete-btn")

    delateBtn.addEventListener('click', () => {
        galleryCards.removeChild(itemDiv)
    })

    itemDiv.appendChild(createP)
    // itemDiv.appendChild(p)
    itemDiv.appendChild(delateBtn)

    galleryCards.appendChild(itemDiv)
});