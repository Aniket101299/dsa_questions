function diagonalDifference(arr) {
    let sum1 = 0; 
    let sum2 = 0;
   for(let i=0; i<arr.length; i++) {
       for(let j=0; j<arr.length; j++) {
           if(i ==j) {
               sum1+= arr[i][j];
           }
       }
   }
   
   let j = arr.length-1;
   
   while(j>=0) {
      for(let i=0; i<arr.length; i++) {
          sum2+= arr[i][j];
          j--; 
      }   
   }
     
   let x = Math.abs(sum1 - sum2);
   return x;
}