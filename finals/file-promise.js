const fs = require('fs');
const { resolve } = require('path');
var one=[],two,three,four;
const checkWord = w => {
    let letters = /^[A-Za-z]+$/;
    if (w.match(letters)) return true;
    return false;
};  
const find = (a)=>{  
    return new Promise((res,rej)=>{
        a.map(data=>console.log(data));
        res("nice");
    })
}
const find1 = (a)=>{  
    return new Promise((res,rej)=>{
        a = a.trim();
        a.forEach(element => {
            resolve(a.map(data=>data+"l"))
        });
    })
}


fs.readFile("/Users/Tserenjigmed/desktop/september/big.txt","utf8", (err,data)=> {
    fs.readFile("/Users/Tserenjigmed/desktop/september/sgb-words.txt","utf8", (err,data1)=> {
        fs.readFile("/Users/Tserenjigmed/desktop/september/shakespeare.txt","utf8", (err,data2)=> {
            fs.readFile("/Users/Tserenjigmed/desktop/september/smaller.txt", "utf8",  (err,data3)=> {
                data3=data3.trim();
                // console.log(data3)
                find1(data3);
                .then((result) => {
                    console.log(result);
                }).catch((err) => {
                    
                });
            }); 
        }); 
    }); 
}); 