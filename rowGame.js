function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let [n,m] = input[line++].split(" ").map(Number);
        let matrix = [];
        for(let j=0; j<n; j++) {
           let arr = input[line++].trim().split(" ").map(Number);  
           matrix.push(arr);
        }
        console.log(RowGame(n,m,matrix)); 
    }
}



function RowGame(n,m,matrix) {

let presentInAll = 0; 

let firstRow = [];

for(let i=0; i<m; i++) {
    if(!firstRow.includes(matrix[0][i])) {
        firstRow.push(matrix[0][i]);
    }
}


  for(let k=0; k<firstRow.length; k++) {
       let count = 0;  
      for(let i=1; i<n; i++) {
        for(let j=0; j<m; j++) {
          if(firstRow[k] == matrix[i][j]) {
              count++;
              break;
          }
        }
    }
    if(count==n-1) {
        presentInAll++; 
     }
  }

return presentInAll;

}







if (process.env.USERNAME === "ASUS") {
  runProgram(`
  2
3 3
1 2 1 
1 3 1
1 2 1
3 3
1 2 3
1 1 3
1 2 3`);
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
    process.exit(0);
  });
}