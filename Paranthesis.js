function balance(str){
    let count=0;
    var flag=true;
    for(let i=0;i<str.length;i++){
        if(str[i]=='(')
        count++;
        else
        count--;
        if(count<0){
            flag=false;
            break;
        }
    }
    if(count!=0)
        flag=false;
    return flag;
}

const str="((())";
if(balance(str))
console.log("balance");
else
console.log("unbalanced");