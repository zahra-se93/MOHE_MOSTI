const prompt=require('prompt-sync')()

let n=parseInt(prompt('Enter factorial value (n)'))
console.log(`Find factorial ${n}: `);

let output=' '
   while(n>1){
    output +=n+'*'
    n--
    }

    if(n==1){
    output+=n}

console.log(output);