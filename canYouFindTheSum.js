function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    CanYouFindTheSum(n,arr);
 }
 
  
  


function  CanYouFindTheSum(n,arr) {
let output = "";

for(let i=0; i<n; i++) {
    let max = -1;
    let min = -1;

    for(let j=i-1; j>=0; j--) {
        if(arr[j] > arr[i]) {
            max = j+1;
            break;
        }
    }
    
    for(let k=i+1; k<=n; k++) {
        if(arr[k]>arr[i]) {
            min = k+1;
            break;
        }
    }
    
   output += (min+max) + " ";
    
}
console.log(output);
}




 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`5
    5 4 1 3 2`);
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