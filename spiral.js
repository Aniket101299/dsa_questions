function spirallyTraversingAMatrix(N, matrix){
    let top = 0;
    let bottom = N-1;
    let left = 0;
    let right = N-1;
    let count = 0;
    let output = "";
    while( count<(N*N) ) {
    for(let i=left; i<=right; i++) {
     output = output + matrix[top][i] + " ";
     count++;
    }
    top++;
    for(let i=top; i<=bottom; i++) {
     output = output + matrix[i][right] + " ";
      count++;
    }
      right--;
     for(let i=right; i>=left; i--) {
      output = output + matrix[bottom][i] + " ";
       count++;
     }
     bottom--;
     for(let i=bottom; i>=top; i--) {
      output = output + matrix[i][left] + " ";
       count++;
     }
      left++;
    }
    console.log(output);
  }
  
  