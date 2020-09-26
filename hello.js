const solve = (x) =>{
    if(x[1]=="A" || x[1]=="C"){
        return "YES"
    }
    else{
        return "NO";
    }
}
var b;
const solve1 = (x) => {
    if(x[1]=="a"){
        if((parseInt(x[0])-1)%2==0){
            b = (parseInt(x[0])-1)/2*5;
        }
        else{
            b = (parseInt(x[0]-1))/3*5;
        }
    }
    if(x[1]=="b"){
        if((parseInt(x[0])-1)%2==0){
            b = (parseInt(x[0])-1)/2*5+1;
        }
        else{
            b = (parseInt(x[0]-1))/3*5+1;
        }
    }
    if(x[1]=="c"){
        if((parseInt(x[0])-1)%2==0){
            b = (parseInt(x[0])-1)/2*5+2;
        }
        else{
            b = (parseInt(x[0]-1))/3*5+2;
        }

    }
}

const solve3 = (x,y) => {
    if(x[1]==y[1]){
        return "YES";
    }
    else{
        return "NO";
    }
}

console.log(solve("3A"));
console.log(solve1("3A"));
console.log(solve("3A","15B"));