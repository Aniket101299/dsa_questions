function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
   
    for(let i=0; i<testCases; i++) {
        let matrix = [];
        let [n,m] = input[line++].trim().split(" ").map(Number);
        for(let j=0; j<n; j++) {
            let arr = input[line++].trim().split("");
            matrix.push(arr); 
        }
        console.log(WalkInThePark(n,m,matrix));
    }
  }
  
  
  
function WalkInThePark(n,m,matrix) {

let row = 0;
let col = 0;
let count = 0;
        
  while((row<n && row>=0) && (col<m && col>=0)) {
       
      if(matrix[row][col] == "A") {
          return count;
      } else if(matrix[row][col] == "R") {
          matrix[row][col] = "A";
          col++;
          count++;
      } else if(matrix[row][col] == "L") {
          matrix[row][col] = "A";
          col--;
          count++;
      } else if(matrix[row][col] == "U") {
          matrix[row][col] = "A";
          row--;
          count++;
      } else if(matrix[row][col] == "D") {
          matrix[row][col] = "A";
          row++;
          count++;
      }
  }
   

return count;

}
  
  
  
  
  
  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`1
    3 4
    RRDR
    LLUD
    LLLL
    `);
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