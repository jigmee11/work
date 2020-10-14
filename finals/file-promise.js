const { promises } = require('dns');
const fs = require('fs');

const checkWord = w => {
    let letters = /^[A-Za-z]+$/;
    if (w.match(letters)) return w;
    return;
}; 

const read = (filename) => {
    return new Promise((res,rej)=>{
        fs.readFile(`/Users/tserenjigmedshagdar/Desktop/second-year-Nest/work/${filename}`, "utf8",  (err,data)=> {
            res(data);
        }); 
    })
}
Promise.all([read('big.txt'),read('sgb-words.txt'),read('shakespeare.txt'),read('smaller.txt')])
    .then((result) => {
        result = result.join().replace(/(\r\n|\n|\r)/gm," ").split(' ').filter(checkWord).map(e=>e.toLowerCase());
        let count = {};
        result.map(word=>{
            if(word in count){
                count[word]++;
            }
            else{
                count[word]=1;
            }
        })
        let ans = Object.keys(count).sort((a,b)=>{return count[a]-count[b]}).reverse();

        let key = ans.slice(0,10).map(key=>{return {word:key, value: count[key]}});
        console.log(key);
    }).catch((err) => {
        
    });
