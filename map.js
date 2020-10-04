const a = [10,120,2323];
// const b = a.map(e=>2020-e);
// const c = a.filter(e=>e>100);
// // Array.prototype.map= function(d){
// //     const k=[];
// //     this.forEach(a=>k.push(d[a]));
// //     return k;
// // }

// // Array.prototype.filte1=(d,e)=>{
// //     const k=[10,20];
// //     this.forEach(i=>console.log(i));
// //     return k;
// // }
// const map = (arr,callBack)=>{
//     let ans = [];
//     console.log(callBack);
//     for(let i=0; i<arr.lenght; i++){
//         let b = callBack(arr[i]);
//         if(b){
//             ans.push(arr[i]);
//             console.log(b);
//         }
//     }
//     return ans;
// };
// const p = map(a, e=>2020-e);
const l = a.reduce((a,b)=>{
    return a+b;
});
console.log(l);