function subset(arr1,arr2,m,n){
    let hset=new Set();
    for(let i=0;i<m;i++){
        if(!hset.has(arr1[i]))
        hset.add(arr1[i]);
    }
    for(let i=0;i<n;i++){
        if(!hset.has(arr2[i]))
        return false;
    }
    return true;
}
let arr1=[1,2,3,4,5,6,7];
let arr2=[5,4,3,7];
let m=arr1.length;
let n=arr2.length;
if(subset(arr1,arr2,m,n))
console.log("subset");
else
console.log("not a subset");