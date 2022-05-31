function matrixNonPrimeCheck(N, M, arr) {
    let NonPrimeCount = 0;
   
   for(let i=0; i<N; i++) {
       for(let j=0; j<M; j++) {
           if(arr[i][j] === 1) {
               NonPrimeCount++;
           }
           let count = 0;
           for(let k=2; k<arr[i][j]; k++) {
               if(arr[i][j]%k === 0) {
                   count++;
                   break;
               }
           }
           if(count > 0) {
             NonPrimeCount++; 
           }
       }
   }
   
   console.log(NonPrimeCount);
   }
   