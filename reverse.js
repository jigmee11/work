const read = require('readline');


const rl = read.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question(`utgaa oruul: `, (userInpute) => {
    const trimer = userInpute.trim();
    let arr = trimer.split('');
    console.log(((arr.reverse()).toString()).trim());
    // let a = arr.reverse();
    // console.log(a);
    // let op='';
    // a.forEach(e => {
    //     op += e;
    // })
    // console.log(op);
    rl.close();
})