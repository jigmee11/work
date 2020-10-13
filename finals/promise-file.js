const { darkmagenta, linen } = require('color-name');
const { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } = require('constants');
const fs = require('fs');
const { resolve } = require('path');
const { versions } = require('process');

const read = (filename) => {
    return new Promise((res,rej)=>{
        fs.readFile(`/Users/Tserenjigmed/Desktop/september/${filename}`, "utf8",  (err,data)=> {
            res(data);
        }); 
    })
}
let c = {};
const check = (a) => {
    return new Promise((res,rej)=>{
        a.map(e=>{
            if(e in c){ 
                c[e]++;
            }
            else{
                c[e]=1;
            }
        })
        const l = Object.entries(c).sort((a,b) => b[1]-a[1])
        res(l);
    })
}

const checkWord = w => {
    let letters = /^[A-Za-z]+$/;
    if (w.match(letters)) return true;
    return false;
};  
Promise.all([read('big.txt'),read('smaller.txt'),read('sgb-words.txt'),read('shakespeare.txt')])
.then((result) => {
    let k=result.join();
    let b = [];
    k = k.replace(/(\r\n|\n|\r)/gm,"");
    k = k.split(' ');
    k =k.filter(e=>{
        if(checkWord(e)){
            e = e.toLowerCase();
            return e;
        }
    })
    check(k)
        .then((res) => {
            console.log(res[0]);
        }).catch((er) => {
            
        });
}).catch((err) => { 
});

// ['ab   sdfsdf', 'sdf  sdfsd', 'sfsdfs  df']
// 1. join
// 2. remote end of line
// 3. split(" ")
// 3. checkWord(" ")
// 4. count
// join='ab   sdfsdf sdf  sdfsd sfsdfs  df'
// join='ab \n   sdfsdf sdf  sdfsd sfsdfs  df'