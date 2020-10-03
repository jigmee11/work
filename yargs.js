const chalk = require('chalk');
const argv = require('yargs').argv;
console.log(chalk[`bg${argv.bg}`][argv.c](argv.t));