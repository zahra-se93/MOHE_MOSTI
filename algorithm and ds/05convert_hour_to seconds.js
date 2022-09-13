const prompt=require('prompt-sync')()

let h=parseFloat(prompt('Enter hours to convert in seconds: '))
console.log(`Find hours ${h} :`)

let sec=h*60*60

console.log(`Seconds : ${sec}`)