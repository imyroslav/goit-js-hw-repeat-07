"use strict";


const categoryArray = document.querySelectorAll(".item");
console.log(`Number of categories:${categoryArray.length}`);
console.log(categoryArray);

// categoryArray.forEach(catData);

// function catData() {
    
//     let headingTwo = document.querySelector("h2");
//     console.log(`Category: ${headingTwo.textContent}`);
//     const elementArray = document.querySelectorAll(".item ul li")
//     console.log(elementArray.length)
// }

for (const category of categoryArray) {
    const headingTwo = document.querySelector("h2");
    console.log(`Category: ${headingTwo.textContent}`);
    const elementArray = document.querySelectorAll(".item ul li")
    console.log(elementArray.length)
}








