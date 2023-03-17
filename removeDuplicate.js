const arr=[1,1,2,2,3,3,4,4];
function remove(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(remove(arr));