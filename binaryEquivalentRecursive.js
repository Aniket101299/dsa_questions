function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++].trim();
        console.log(BinaryEquivalentRecursive(n));
    }
  
 }
 
  
  
let output = "";
let mod;

function BinaryEquivalentRecursive(n) {

if(n<=0) {
    let out = "";
    for(let i=output.length-1; i>=0; i--) {
        out+= output[i];
    }
    output = "";
    return out;
} 

mod = n%2;
output+= mod;
let x = Math.floor(n/2);
return BinaryEquivalentRecursive(x);

}




 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`2
    15
    128`);
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