const openButton = document.querySelector("#open");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const closeButton = document.querySelector("#close");
const lists = document.querySelector("ul");


openButton.addEventListener("click", () => {
    container.classList.add("show-nav");
    circle.classList.add("two");
    lists.classList.add("one")
    
})


closeButton.addEventListener("click", () => {
    container.classList.remove("show-nav");
    circle.classList.remove("two");
    lists.classList.remove("one");
})