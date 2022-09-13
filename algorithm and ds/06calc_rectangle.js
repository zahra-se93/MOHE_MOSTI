const prompt=require('prompt-sync')()

let width=parseInt(prompt('Enter width: '))
let length=parseInt(prompt('Enter length: '))
console.log(`Area of rectangle: ${length*width}`);
