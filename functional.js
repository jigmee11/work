const read = require('readline');
const rl = read.createInterface({
    input: process.stdin, 
    output: process.stdout
})
rl.question(`your name:`, (number)=>{
    number[0]
    const hi =(ner)=> console.log(`Hi ${ner}`);
    hi(number);
    rl.close();
})