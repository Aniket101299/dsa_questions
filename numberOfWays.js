function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    console.log(NumberOfWays(n));
 }
 
  
function NumberOfWays(n) {

if(n===0) {
    return 1;
} else if(n<0) {
   return 0;
} else {
    return NumberOfWays(n-3) + NumberOfWays(n-2) + NumberOfWays(n-1);
} 


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