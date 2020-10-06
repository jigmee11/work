const plusFunction=(n)=>{
    const plus=(value)=>{
        return value+n;
    }
    return plus;
}
const plusFive = plusFunction(5);
console.log(plusFive(10));