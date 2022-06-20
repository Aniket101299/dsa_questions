function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);  
        console.log(PointOne(n,arr)); 
    }
  
}



function PointOne(n,arr) {

let low = 0;
let high = n-1;
let result = -1;

while(low<=high) {
    let mid = low + Math.floor(high-low/2);
    if(arr[mid]==1) {
        result = mid;
        high = mid - 1;
    } else {
        low = mid + 1;
    }
}

return result;

}



if (process.env.USERNAME === "ASUS") {
  runProgram(`2
  4
  0 0 0 1 
  1
  1`);
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