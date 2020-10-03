const readline = require('readline');
const { max } = require('./new-math');
const math = require('./new-math');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('a,b: ', (a)=>{
    const array = a.trim().split(' ');
    const p = parseInt(array[0]);
    const t = parseInt(array[1]);
    console.log(math.max(p,t) + " ih");
    console.log(math.sqrt(p))
    console.log(math.floor(a));
    console.log(math.abs(a));
    rl.close();
})