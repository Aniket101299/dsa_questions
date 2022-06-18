function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++];
        let str = input[line++].trim();
        console.log(CipherString(n,str));
    }
  }
  
  
  
function  CipherString(n,str) {

let output = "";
let count = 1;

for(let i=0; i<n; i++) {
    if(str[i] == str[i+1]) {
        count++;
    } else {
       output = output + str[i] + count;
       count = 1;
    } 
}

return output;

}
  
  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`2
    5
    aabcc
    5
    aazaa`);
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