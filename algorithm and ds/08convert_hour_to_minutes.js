const prompt=require('prompt-sync')()

let h=parseFloat(prompt('Enter hours: '))
console.log(`Convert hours: ${h}`)
let min=60

console.log(`Minutes: ${h*min}`)