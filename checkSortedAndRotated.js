function runProgram(input) {
    input = input.trim().split("\n"); 
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    
    console.log(CheckifSortedandrotated(n,arr));
    }
    
    function CheckifSortedandrotated(n,arr) {
    
    
      
            minEle = 99999999999;
            maxEle = 0;
    
            minIndex = -1;
    
            // Find the minimum element and it's index
            
            for (let i =0; i<n; i++) {
                if (arr[i] < minEle) {
                    minEle = arr[i];
                    minIndex = i;
                }
            }
    
            let flag1 = 1;
    
            // Check if all elements before minIndex are in decreasing order
            
            for (let i=1; i<minIndex; i++) {
                if (arr[i] < arr[i-1]) {
                    flag1 = 0;
                    break;
                }
            }
    
            let flag2 = 1;
    
            // Check if all elements after minIndex are in increasing order
            
            for (let i=minIndex+1; i<n; i++) {
                if (arr[i] < arr[i-1]) {
                    flag2 = 0;
                    break;
                }
            }
    
            // Check if last element of the array is smaller than the element just
            // starting element of the array for arrays like [3,4,6,1,2,5] - not circular array
            
            if ( flag1===1 && flag2===1 && ( arr[0] > arr[n - 1] ) ) {
                return "YES";
            } else {
                return "NO";
            }
    
    }
    
    
    
    if (process.env.USERNAME === "ASUS") {
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