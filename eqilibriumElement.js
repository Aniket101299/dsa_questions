function equilibriumElement(N, arr){
    let sum=0;
    for(let i=0; i<N; i++){
        sum+=arr[i];
    }
    // console.log(sum);
    for(let i=0; i<N; i++){
        let sum1=0;
        for(j=0; j<i; j++){
            sum1+=arr[j];
        }
        // console.log(sum1);
        if((sum-(arr[i]+sum1))==sum1){
            console.log(i+1);
            return;
        }
    }
    console.log(-1);
}

// Sample I/P
// 5
// 3 3 5 5 1

// Sample O/P
// 3