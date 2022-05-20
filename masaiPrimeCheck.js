function runProgram(input) {
    input = input.trim().split("\n");
    let [N,M] = input[0].trim().split(" ").map(Number);
    let matrix = [];
    let line = 1;
    for(let i=0; i<N; i++) {
        let arr = input[line++].trim().split(" ").map(Number);
        matrix.push(arr);
    }
    console.log(MatrixPrimeCheck(N,M,matrix));
 }
 
  
  

function MatrixPrimeCheck(N,M,matrix) {

let PrimeCount = 0;

for(let i=0; i<N; i++) {
    for(let j=0; j<M; j++) {
        if(matrix[i][j] === 1) {
            continue;
        }
        let count = 0;
        for(let k=2; k<matrix[i][j]; k++) {
            if(matrix[i][j]%k === 0) {
                count++;
                break;
            }
        }
        if(count === 0) {
          PrimeCount++; 
        }
    }
}

return PrimeCount;

}



 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }