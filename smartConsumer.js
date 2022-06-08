function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let [n,x,y] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(SmartConsumer(n,x,y,arr));
    }
  }
  
  
  
function SmartConsumer(n,x,y,arr) {

let sum =0;
let tSum = 0;

for(let i=0; i<n; i++) {
    tSum+= arr[i];
    if(arr[i] > y) {
        sum+= arr[i]-y;
    }
}

if((sum+x)<tSum) {
   return "YES"; 
} else {
    return "NO";
}


}
  
  
  
  
  
  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`3
    4 30 10
    15 8 22 6
    4 40 10
    15 8 22 6
    4 34 10
    15 8 22 6`);
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