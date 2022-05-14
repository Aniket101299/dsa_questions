function runProgram(input) {
    input = input.trim().split("\n"); 
    let testCases = +input[0];
    let line=1;
    
    for(let i=0; i<testCases; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(ThePeakPoint(n,arr)); 
    }
    
    }
    
    function ThePeakPoint(n,arr) {
    
    // for(let j=0; j<n; j++) {
    //     if( arr[j]>arr[j+1] && arr[j]>arr[j-1] ) {
    //         return j;
    //     }
    // }
    
    
    let low = 0;
    let high = n-1;
    
    while(low<high) {
      let mid = Math.floor(low + (high-low)/2);
      if( arr[mid+1]<arr[mid] && arr[mid-1]<arr[mid] ) {
          return mid;
      } else if(arr[mid+1]>arr[mid]) {
         low = mid+1;
      } else {
          high = mid-1; 
      }
    }
    return low;
    
    
    }
    
    
    
    if (process.env.USERNAME === "ASUS") {
      runProgram(`2
      3
      10 20 11
      5
      1 3 6 5 4`);
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