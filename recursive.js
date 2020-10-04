const recur = (n)=>{
    if(n==1){
        return 1;
    }
    return n*(n-1)
}
recur(3);
const fibo = (n)=>{
    if(n<1){
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(4));