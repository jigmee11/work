const pi = 3.14159265359;
// module.exports.max=(a,b)=>{
//     if(a>b){
//         return 'a ni ih';
//     }
//     else{
//         return 'b ni ih';
//     }
// }
module.exports={
    max: (a,b)=>{
        if(a>b){
            return 'a ni ih';
        }
        else{
            return 'b ni ih';
        }
    },
    min: (a,b)=>{
        if(a>b){
            return 'b ni baga';
        }
        if(b>a){
            return 'a ni baga';
        }
    },
    sqrt: (x)=>{
        return Math.sqrt(x);
    },
    round: (x)=>{
        return Math.round(x);
    },
    ceil: (x)=>{
        return Math.ceil(x);
    },
    floor: (x)=>{
        return Math.floor(x);
    }
}