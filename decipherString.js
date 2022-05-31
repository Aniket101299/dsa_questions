function runProgram(input) {
    input = input.trim().split("\n"); 
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
    let n = +input[line++];
    let str = input[line].trim();
    let arr = input[line++].trim().split("").map(Number);  
    console.log(DecipherString(n,str,arr));
    }
    
    }
    
    
    
    
    
    function DecipherString(n,str,arr) {
     
    let out = "";
    for(let i=0; i<n; i++) {
        if(typeof arr[i] == "number") {
            for(let j=0; j<arr[i]; j++) {
                out+= str[i-1];
            }
        } else {
            out+= str[i];
        }
    }
    return out;
    }
    
    
    
    
    
    
    if (process.env.USERNAME === "ASUS") {
      runProgram(`2
      6
      a2b1c2
      6
      a2z1a2`);
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
    
    
    
    
    
    
    
    
    
    
    