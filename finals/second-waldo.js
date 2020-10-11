const waldo = (a) => {
    let b = [];
    let c=a[0];
    if(c!=a[1] && c==a[2]){
        c = a[1];
    }
    else if(c==a[1] && c!=a[2]){
        c = a[2];
    }
    else{
        return console.log(c);
    }
    a.map((e,i)=>e.map((d,j)=>{
        if(d!=c){
            return console.log(i,j);
        }
    }));
}
const input=[
    ["a","a","a"],
    ["a","a","b"],
    ["a","a","a"]
]
waldo(input);