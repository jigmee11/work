const { stdin, stdout } = require('process');
let read = require('readline');
let sum = 0;
const rl = read.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question(`Given array: `, (userInput) => {
    // hooson zai tseg taslaliig taslana
    let trimedInput = userInput.trim();
    // string iig array bolgono
    let arr = trimedInput.split(' ');
    let sum = 0;
    arr.forEach(function(value){
        sum +=parseInt(value);
    })
    console.log(`answer: ${sum}`);
    // rl.close haaj bain
    rl.close();     
})