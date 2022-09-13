const prompt=require('prompt-sync')()

let age=parseInt(prompt('Enter your age: '))
let dayYear=365
console.log(`Convert age(years) to days: ${age*dayYear}`);