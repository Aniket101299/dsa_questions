function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let n = arr.length;
    
    for(let i=0; i<n; i++) {
        if(arr[i] === 0) {
            zero++;
        } else if(arr[i]>0) {
            positive++;
        } else {
            negative++;
        }
    }
    
    console.log((positive/n).toFixed(6));
    console.log((negative/n).toFixed(6));
    console.log((zero/n).toFixed(6));
}