const { relative } = require("path")

const a = (b) => {
    return new Promise((res,rej)=>{
        if(b%2==0){
            res("yes");
        }
        else{
            rej("no");
        }
    })
}
a(12)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });