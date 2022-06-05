function miniMaxSum(arr) {
    let n = arr.length;
    arr.sort((a,b) => a-b);
    let min = 0;
    let max = 0;
    for(let i=0; i<n-1; i++) {
        min+= arr[i];
    }

    for(let i=n-1; i>0; i--) {
        max+= arr[i];
    }
    
    console.log(min + " " + max);
}