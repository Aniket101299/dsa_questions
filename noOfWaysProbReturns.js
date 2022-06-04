function runProgram(input) {
    let n = +input;
    console.log(NumberofwaysproblemsReturns(n));
    }
    
    
    function NumberofwaysproblemsReturns(n) {
        
    //   if(n === 0) {
    //      return 1; 
    //   } else if(n < 0) {
    //       return 0; 
    //   } else {
    //       return NumberofwaysproblemsReturns(n - 1) + NumberofwaysproblemsReturns(n - 2) + NumberofwaysproblemsReturns(n - 3);
    //   }
        
    // let dp = [...new Array(n+1)].map(() => -1); 
    let dp = new Array(n+1).fill(-1); 
    
    dp[0]=1;
    dp[1]=1;
    dp[2]=2;
    
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]; 
    }
    
    return dp[n];
    
        
        
    
        //   if(n === 0) {
        //       return 1; 
        //   } else if(n < 0) {
        //       return 0; 
        //   } else {
        //      if(dp[n] != -1) {
        //         return dp[n];
        //      } else {
        //         dp[n] = NumberofwaysproblemsReturns(n-1) + NumberofwaysproblemsReturns(n-2) + NumberofwaysproblemsReturns(n-3);
        //         return dp[n]; 
        //      }
        //   }
    }
    
    
    
    
    if (process.env.USERNAME === "ASUS") {
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
    
    
    
    
    
    
    
    
    
    