function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] >second && arr[i] != first){
            second = arr[i];
        }
    }
    document.write(first+"<br>");
    document.write(second)
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);