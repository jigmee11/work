const add = (x) => (y)=>(z)=>x*y*z;
add(1)(2)(3);
let i=1;
const recur = (n)=>{
    if(n>1){
        recur(n-1);
    }
    return console.log(n);
}
recur(5);
