const find = (n) => {
    let k,a;
    k=n[0][0];
    if(k==n[0][1]){
        a=k;
    }
    else{
        if(k!=n[0][2]){
            return n[0][0];
        }
        else{
            return n[0][1];
        }
    }
    n.forEach((element,i) => {      
        element.forEach((e,j)=>{
            if(e!=a){
                return console.log(i+1,j+1);
            }
            j++;
        })
    });
} 
const input=[
    ["a","a","a"],
    ["a","a","a"],
    ["a","b","a"]
]
find(input);