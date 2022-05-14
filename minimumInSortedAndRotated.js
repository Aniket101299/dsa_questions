function runProgram(input) {
    input = input.trim().split("\n"); 
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    
    console.log(Minimuminsortedrotatedarray(n,arr));
    }
    
    
    function Minimuminsortedrotatedarray(n,arr) {
    
    let low = 0;
    let high = n-1;
    
    // if all elements in an item are same 
    if( arr[low]===arr[high] && arr[low+1]===arr[high-1] ) { 
    return arr[low]; 
    }
    
    while(low<=high) {
        let mid = Math.floor(low + (high-low)/2);
        // arr[mid]<arr[(mid+1)%n] && 
      if( arr[mid]<arr[(mid-1+n)%n] ) {
            return arr[mid];
        } else if (arr[0]>=arr[mid]) { // it means left part is sorted but we have to
                                      // search in unsorted part so we r discarding left part
             high = mid;               // by making low = mid and search in unsorted right part
        } else {
            low = mid;
        }
    }
    
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