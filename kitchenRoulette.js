function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let [n,k] = input[line++].trim().split(" ").map(Number);
        let arr1 = input[line++].trim().split(" ").map(Number);
        let arr2 = input[line++].trim().split(" ").map(Number);
        console.log(KitchenRoulette(n,k,arr1,arr2));
    }
  }
  
  
  
function KitchenRoulette(n,k,arr1,arr2) {

let max = 0;
let maxI = null;
let index = [];

for(let i=0; i<n; i++) {
    if(arr1[i]>max) {
        max = arr1[i];
        maxI = i+1;
    }
}

index.push(maxI);

for(let i=0; i<n; i++) {
    if(arr1[i] == max) {
        index.push(i+1);
    }
}


for(let i=0; i<k; i++) {
    for(let j=0; j<index.length; j++) {
        if(index[j] == arr2[i]) {
            return "YES";
        }   
    }
}

return "NO";

}
  
  
  
  
  
  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`1
    5 3
    6 8 10 7 10
    2 3 4`);
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