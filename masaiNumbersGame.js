function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = [];
    let line = 1;
    for(let i=0; i<n; i++) {
        arr.push(+input[line++].trim());
    }
  
    MasaiNumbersGame(n,arr);
 }
 
  
  


function  MasaiNumbersGame(n,arr) {
let output = "";

for(let i=0; i<n; i++) {
    let k = -1;
    for(let j=i+1; j<=n; j++) {
        if(arr[j]>arr[i]) {
             k = j;
            break;
        }
    }
    
    let ans = -1;  
    
    if(k === -1) {
       output+= -1 + " "; 
    } else {
      for(let p=k; p<=n; p++) {
         if(arr[p]<arr[k]) {
              ans = arr[p];
             break;
          }
       }
       output += ans + " ";
    }
    
}

console.log(output);

}




 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`8
    3
    7
    1
    7
    8
    4
    5
    2`);
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