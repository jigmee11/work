const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200,{'Contact-Type':'text/html'});
    fs.readFile('.'+`${req.url}`, null, (read,data)=>{
        if(read){
            fs.readFile('./baihgui.html', null, (err, d)=>{
                res.write(d);
                return res.end();
            })
        }
        else{
            res.write(data);
            return res.end();
        }  
    })
}).listen(8000);