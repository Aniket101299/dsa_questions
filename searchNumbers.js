function runProgram(input) {
    input = input.trim().split("\n"); 
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number).sort((a, b)=> a - b);
    let k = +input[2];
    let line = 3;
    let out = "";
    for(let i=0; i<k; i++) {
       let [l,r] = input[line++].trim().split(" ").map(Number);
       out+= SearchNumbers(n,arr,l,r) +" ";  
    }
    
    console.log(out);
    
    }
    
    
    
    
    
    function SearchNumbers(n,arr,l,r) {
    
    // let count = 0;
    
    // for(let i=0; i<n; i++) {
    //     if(arr[i]>=l && arr[i]<=r) {
    //         count++;
    //     }
    // }
    
    // return count;
    
         
        // function to find first index >= l
        
        function lowerIndex(n, arr, l) {
               
            let low = 0, high = n - 1;
            while (low <= high) {
                let mid = Math.floor((low + (high-low)/ 2));
                if (arr[mid] >= l) {
                   high = mid - 1;  
                } else {
                    low = mid + 1; 
                }
            }
            return low;
        }
           
        // function to find last index <= r
        
        function upperIndex(n, arr, r) {
            let low = 0, high = n - 1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (arr[mid] <= r) {
                    low = mid + 1; 
                } else {
                    high = mid - 1; 
                }
                   
            }
            return high;
        }
           
        // Count elements within given range
       
            let count = 0;
            count = ( upperIndex(n, arr, r) - lowerIndex(n, arr, l) ) + 1;
            return count;
       
    }
    
    
    
    
    
    
    if (process.env.USER === "") {
      runProgram(``);
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
    
    
    
    
    
    
    
    
    
    
    