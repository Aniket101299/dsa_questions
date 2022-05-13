function runProgram(input) {
    input = input.trim().split("\n"); 
     let n = +input[0];
     let str = input[1].trim();
     let cur = 0;
     let out = [];
     GenerateAllSubsequence(n,str,out,cur);
    }
    
    
    
    
    
    function GenerateAllSubsequence(n,str,out,cur) {
    
    if(out.length>0) {
     console.log(out.join(""));     
    }
    if(cur === n) {
        return;
    }
    
    for(let i=cur; i<n; i++) {
        out.push(str[i]);
        GenerateAllSubsequence(n,str,out,i+1);
        out.pop();
    }
     
    }
    
    
    
    
    
    
    if (process.env.USERNAME === "ASUS") {
      runProgram(`4
      abcd`);
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
    
    