const fs = require('fs');
const { resolve } = require('path');
const { versions } = require('process');
const checkWord = w => {
    let letters = /^[A-Za-z]+$/;
    if (w.match(letters)) return true;
    return false;
};  
// const find = (a)=>{  
//     return new Promise((res,rej)=>{
//         a=a.trim();
//         a = a.split(' ');
//         let b = [];
//         a.map(e=>{
//             if(checkWord(e)){
//                 e=e.toLowerCase();
//                 b.push(e);
//             }
//         })
//         res(b);
//     })
// }
const find1 = (a) =>{
    return new Promise((res,rej)=>{
        a = a.trim();
        a = a.split('\n');
        let b = [];
        a.map((e,i)=>{
            e = e.split(' ');
            e.map(q=>{
                if(checkWord(q)){
                    q=q.toLowerCase();
                    b.push(q);
                }
            })
        })
        res(b);
    })
}
let word;
let time=0;
const main=(a)=>{
    return new Promise((res,rej)=>{
        let b = [];
        let c=true;
        let j=0;
        a.forEach((element,i) => {
            b.forEach(e=>{
                if(e==element){
                    c = false;
                }
            })
            if(c){
                let d = a.slice(i,a.length);
                let now = d[0];
                d.map(e=>{
                    if(e==now){
                        j++;
                    }
                })
                if(j>time){
                    word = now;
                    time = j;
                }
                b.push(now);
            }
            j=0;
            c=true;
        });
        res([word,time]);
    })
}

fs.readFile("/Users/tserenjigmedshagdar/Desktop/second-year-Nest/work/big.txt","utf8", (err,data)=> {
    fs.readFile("/Users/tserenjigmedshagdar/Desktop/second-year-Nest/work/sgb-words.txt","utf8", (err,data1)=> {
        fs.readFile("/Users/tserenjigmedshagdar/Desktop/second-year-Nest/work/shakespeare.txt","utf8", (err,data2)=> {
            fs.readFile("/Users/tserenjigmedshagdar/Desktop/second-year-Nest/work/smaller.txt", "utf8",  (err,data3)=> {
                Promise.all([find1(data),find1(data1),find1(data2),find1(data3)])
                    .then((result) => {
                        let k=result[0].concat(result[1],result[2],result[3]);
                        main(k)
                        .then((res) => {
                            console.log(res[0] + " " + res[1]);
                        }).catch((er) => {
                            
                        });
                    }).catch((err) => {
                        console.log(err);
                    });
            }); 
        }); 
    }); 
}); 
