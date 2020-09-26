const read = require('readline');

const rl = read.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question(`utgaa oruul: `, (userInpute) => {
    const trimer = userInpute.trim();
    let arr = trimer.split(' ');
    let a='';
     arr.forEach(element => {
         console.log(element.toUpperCase());
         a += element;
    });
    rl.close();
})