function runProgram(input) {
    input = input.split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
     console.log(ArraytoString(n,arr,""));
    }
    
    
    function ArraytoString(n,arr,str) {
    
      if(n===0) {
          return str;
      }
      
      let num = arr[0];
      if(num<0) {
          num = 0;
      }
      str = str + num;
      arr.shift();
      n = n-1;
      
      return ArraytoString(n,arr,str);
    }
    
    
    
    
    if (process.env.USERNAME === "ASUS") {
      runProgram(`5
      2 -4 6 8 -9`);
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
    
    
    
    
    
    
    
    
    
    