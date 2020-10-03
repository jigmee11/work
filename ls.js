const chalk = require('chalk');
const argv = require('yargs').argv;
const path = argv.ls;
const fs = require('fs');

fs.readdir(path, (err,file)=>{
    file.forEach(file=>{
        console.log(file);
    })
})