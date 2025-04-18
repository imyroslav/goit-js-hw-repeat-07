"use strict";


const categoryArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryArray.length}`);


categoryArray.forEach(myFunction);

function myFunction(element) {
    const elementHeading = element.querySelector("h2");
    console.log(`Category: ${elementHeading.textContent}`);
    const numberOfItems = element.querySelectorAll("li");
    console.log(`Elements: ${numberOfItems.length}`);
}









