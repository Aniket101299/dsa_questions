function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++];
        let matrix = [];
        for(let j=0; j<n; j++) {
           let arr = input[line++].trim().split(" ").map(Number);  
           matrix.push(arr);
        }
        SwapUpperLowerDiagonalElements(n,matrix); 
    }
}



function SwapUpperLowerDiagonalElements(n,matrix) {

for(let j=0; j<n; j++) {
    let out = "";
    for(let i=0; i<n; i++) {
        out+= matrix[i][j] + " ";
    }
    console.log(out);
}

}







if (process.env.USERNAME === "ASUS") {
  runProgram(`2
  3
  1 2 3
  4 5 6
  7 8 9
  4
  2 3 5 6
  4 5 7 9
  8 6 4 9
  1 3 5 6`);
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