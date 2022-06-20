function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    let matrix = [];
    for(let i=0; i<testCases; i++) {
        let [N,M] = input[line++].trim().split(" ").map(Number);
        for(let i=0; i<N; i++) {
           let arr = input[line++].trim().split(" ").map(Number);
           matrix.push(arr);  
        }
        let K = +input[line++];
        console.log(SearchtheEvil(N,M,matrix,K));
    }
  
}



function SearchtheEvil(N,M,matrix,K) {

for(let i=0; i<matrix.length; i++) {
    j = M-1;
     while(j>=0) {
        
        if(matrix[i][j] == K) {
            return "true";
         }
        
        j--;
    }
 
}

return "false";


}







if (process.env.USERNAME === "ASUS") {
  runProgram(`2
  4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16 
  13
  4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16 
  17`);
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