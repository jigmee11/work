const { white } = require('chalk');
const chalk = require('chalk');
const args = process.argv.slice(2);
let i=0;
let text;
let color;
if(args[0]==="-t"){
    if(args[1]===' '){
        text = "Hello World";
        i++;
    }
    else{
        text = args[1];
        i+=2;
    }
}
if(args[i]==="-c"){
    if(args[i+1]==' '){
        color = 'white';
        i++;
    }
    else{
        color = args[i+1];
    }
}
console.log(chalk[color][text]);
// console.log(chalk.color(text));
// if(args[i]==="-bg"){
//     if(args[i+1]==' '){
//         console.log(chalk.color(text));
//     }
//     else{
//         console.log(chalk.color.underline.args[i+1](text));
//     }
// }
// console.log(chalk.color(text));
