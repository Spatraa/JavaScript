function pair(arr,n,sum){
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if((arr[i]+arr[j])==sum){
                // document.write(arr[i]+","+arr[j]+"<br>")
                count++;
            }
        }
    }
    console.log(count);
}

const arr=[1,4,3,2,5,6];
const n=arr.length;
const sum=7;
pair(arr,n,sum);