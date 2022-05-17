function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
       
        console.log(UniqueWinner(n,arr));
    }
  
 }
 
  


function UniqueWinner(n,arr) {
    
let obj = {}; 
    
for(let i=0; i<n; i++) {
    if(obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
    } else {
        obj[arr[i]] =  obj[arr[i]] + 1; 
    }
}

// console.log(obj);

let newArr = [];

for(var prop in obj) {
    if(obj[prop] == 1) {
        newArr.push(prop);
    }
}

if(newArr.length === 0) {
    return -1;
} else {
  let minUnique = newArr[0];
  for(let i=0; i<n; i++) {
      if(arr[i] == minUnique) {
          return (i+1);
      }
  }
}

console.log(newArr);

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
  