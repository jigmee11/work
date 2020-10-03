const { lstat } = require('fs');
const read = require('readline');

const rl = read.createInterface({
    input: process.stdin, 
    output: process.stdout
})
let a=1,b=0;
rl.question(`numbers: `, (number)=>{
    const n = number.trim().split(' ');
    n.forEach(e=>{
        if(parseInt(e)%2==0){
            b+=parseInt(e);
        }
        else{
            c*=parseInt
        }
    })
})