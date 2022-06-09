function runProgram(input) {
    // Write code here
    input = +input;
    
  //   FibonacciRecursion(input);
  console.log(fib(input));
  
  }
  
      // console.log(input);
      // console.log(typeof input);
      
    function fib(n) {
       
        if(n===0 || n===1) {
            return n;
        }
       
        var sum1 = fib (n-1) + fib (n-2);
         
      //   fib(n);
      return sum1;
  }
  
  
  
  
  
  
  if (process.env.USER === "") {
    runProgram(`4`);
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