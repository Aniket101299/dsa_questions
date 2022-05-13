function runProgram(input) {
    input = input.trim().split("\n"); 
    //  let n = +input[0];
     let arr = input[1].trim().split(" ").map(Number);
     console.log(GeneratePermutations(arr));
    }
    
    
    
    
    
    const GeneratePermutations = (arr = []) => {
    
    
      let res = [];
      const helper = (arr2) => {
          if (arr2.length == arr.length) {
            return res.push(arr2.join(" ")); 
          }
          for(let e of arr) {
            if (!arr2.includes(e)) {
              helper([...arr2, e]);  
            } 
          }
        
      };
       
      helper([]);
      return res.join("\n");
    
    };
    
    
    
    
    
    
    if (process.env.USERNAME === "ASUS") {
      runProgram(`3
      1 2 3`);
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
    
    