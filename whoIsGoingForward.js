function runProgram(input) {
    input = input.trim().split("\n"); 
     let [n,k] = input[0].trim().split(" ").map(Number);
     let arr = input[1].trim().split(" ").map(Number);
     console.log(WhoIsGoingForward(n,k,arr));
    }
    
    
    
    
    
    function WhoIsGoingForward(n,k,arr) {
    
    let pass = arr[k-1];
    let count = 0;
    
    for(let i=0; i<n; i++) {
        if(arr[i]>0 && arr[i]>=pass) {
            count++;
        }
    }
    
    return count;
     
    }
    
    
    
    
    
    
    if (process.env.USERNAME === "ASUS") {
      runProgram(`8 5
      10 9 8 7 7 7 5 5`);
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
    
    