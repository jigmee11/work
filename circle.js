const pi = require('./new-matth');
const read = require('readline');
const rl = read.createInterface({
    input : process.stdin,
    output : process.stdout
})
let a;
let b;
let c = false;
rl.question(`input: `,(userInfo)=>{
    let arr = userInfo.trim().split(' ');
    console.log(pi.max(arr[0],a[1]));
    console.log(pi.min(arr[0],a[1]));
    console.log(pi.sqrt(arr[0]));
    console.log(pi.round(arr[0]));
    console.log(pi.ceil(arr[0]));
    console.log(pi.floor(arr[0]));
    rl.close(); 
})

