function runProgram(input) {
    input = input.trim().split("\n");
        let [n,r] = input[0].trim().split(" ").map(Number); 
        let N = 0;
        console.log((GPRecursion(n,N,r)).toFixed(4)); 
}



function GPRecursion(n,N,r) {

// let x = 56;
// let y = x.toFixed(4);
// console.log(y);


if(N==n) {
    let y = 1/r**N;
     return y; 
}

  let x = 1/r**N;


return (x + GPRecursion(n,N+1,r));


}




if (process.env.USERNAME === "ASUS") {
  runProgram(`1 1`);
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