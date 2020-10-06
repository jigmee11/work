const birth = [10,120,2323];
// const b = a.map(e=>2020-e);
// const c = a.filter(e=>e>100);
// const map = (arr,callBack)=>{
//     let ans = [];
//     for(let i=0; i<arr.length; i++){
//         let b = callBack(arr[i]);
//         if(b){
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// };
const reduce = (a,callBack,b)=>{
    let k;
    let i=0;
    if(!b){
        k = a[i];
        i=1;
    }
    else{
        k = b;
    }
    for(;i<a.length;i++){
        console.log(k, a[i]);
        k+=callBack(k,a[i]);
    }
    return k;
}

// const p = map(a, e=>2020-e);
const l = reduce(birth,(a,b)=>a+b,21);
console.log(l)