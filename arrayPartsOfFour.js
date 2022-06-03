function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    console.log(ArrayPartsOfFour(n,arr));
 }
 
  
function ArrayPartsOfFour(n,arr) {

let  increment = n/4;
let part = n/4;
let count = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;

    for(let i=count; i<part; i++) {
        c1+= arr[i];
        count++;
    }
    
    part+= increment;

     for(let i=count; i<part; i++) {
        c2+= arr[i];
        count++;
    }
    
     part+= increment;

     for(let i=count; i<part; i++) {
        c3+= arr[i];
        count++;
    }
    
     part+= increment;

     for(let i=count; i<part; i++) {
        c4+= arr[i];
        count++;
    }

let equation = 2*c1 + c2 + 2*c3 + c4;
return equation;

}




 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`8
    1 2 3 4 5 6 7 8`);
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