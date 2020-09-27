
    const http = require('http');
    const read = require('readline');
    const rl = read.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let trimp;
    rl.question(`Radius: `, (userInput)=>{
        const pi = 3.14159265359;
        const f = userInput*pi*2;
        console.log(f);
        return;
        // trimp = userInput.trim();
        // http.createServer((req,res)=>{
        //     res.writeHead(200,{'Contact-Type':'text/html'});
        //     const pi = 3.14159265359;
        //     const f = trimp*pi*2;
        //     console.log('http://localhost:8000/');
        //     res.write(`${f}`);
        //     res.end();
        // }).listen(8000);
    })