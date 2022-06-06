function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(NationalAwardCeremony(n,arr));
    }
  }
  
  
  
function NationalAwardCeremony(n,arr) {

let mid = 0;
let low = 0;
let high = n-1;

while(mid<=high) {
    switch(arr[mid]) {
        case 0: {
           let temp = arr[low];
           arr[low] = arr[mid];
           arr[mid] = temp;
           low++;
           mid++;
           break;
        }
        case 1: {
           mid++;
           break; 
        }
         case 2: {
           let temp = arr[mid];
           arr[mid] = arr[high];
           arr[high] = temp;
           high--;
           break; 
        }
    }
}

let out = "";
for(let i=0; i<arr.length; i++) {
    out+=arr[i] + " ";
}

return out;

}
  
  
  
  
  
  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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