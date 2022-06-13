function runProgram(input) {
    input = input.split("\n");
    let [N,X] = input[0].trim().split(" ").map(Number);
    let arrOfQuetions = input[1].trim().split(" ").map(Number);
    console.log(NoddyExamination(N,X,arrOfQuetions));
    //  console.log(NoddyExamination(N,X,arrOfQuetions,ele=0,solved=0,skip=0));
    }
    
    
    // function NoddyExamination(N,X,arrOfQuetions,ele,solve,skip) {
    
    //   if(N===0) {
    //       return solve;
    //   } 
      
    //   if(skip===2) {
    //       return solve;
    //   }
      
    //   if(arrOfQuetions[ele]<=X) {
    //       solve = solve + 1;
    //   } else {
    //       skip = skip + 1;
    //   }
    
    //   ele = ele + 1;
    //   N = N-1;
      
    //   return NoddyExamination(N,X,arrOfQuetions,ele,solve,skip);
    // }
    
    function NoddyExamination(N,X,arrOfQuetions) {
        
      let solve = 0;
      let skip = 0;
      
      for(let i=0; i<N; i++) {
         if(skip>1) {
         return solve;
         }
         if(arrOfQuetions[i]<=X) {
             solve++;
         } else {
             skip++;
         }
      }
      
      return solve;
      
    }
    
    
    
    if (process.env.USERNMAE === "ASUS") {
      runProgram(`7 6
      4 3 7 6 7 2 2
      `);
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
    
    
    
    
    
    
    
    
    
    