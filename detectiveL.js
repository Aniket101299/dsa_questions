function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let [n,m] = input[line++].trim().split(" ").map(Number);
        let matrix = [];
        for(let j=0; j<n; j++) {
            let arr = input[line++].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        console.log(DetectiveL(n,m,matrix));
    }
  
 }
 
  


function DetectiveL(n,m,matrix) {

let top = 0;
let bottom = n-1;
let left = 0;
let right = m-1;
let count = 0;
let output = "";

while(count<(n*m) && bottom>=0 && left<=n-1) {
    for(let i=top; i<=bottom; i++) {
        output+= matrix[i][left] + " ";
        count++;
    }
    
    left++;
    
     for(let i=left; i<=right; i++) {
        output+= matrix[bottom][i] + " ";
        count++;
    }
    bottom--;
 
}
 return output;
}




 
  if (process.env.USERNAME === "ASUS") {
    runProgram(``);
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
