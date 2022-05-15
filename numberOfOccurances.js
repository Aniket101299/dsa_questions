function runProgram(input) {
    input = input.trim().split("\n");
    let [N,K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number).sort(function(a,b) { return a-b;});
//   console.log(N,K,arr);
   NumberofOccurencesinlogn(N,K,arr);
  }
  
  function NumberofOccurencesinlogn(N,K,arr){
     
      
      function lowerBound(N,K,arr) {
          
      let low = 0; 
      let high = N-1;
      
      while(low<=high) {
          
      let mid = Math.floor(low + (high-low)/2);
      
      if(arr[mid]>=K){
        high = mid - 1;  
      } else {
          low = mid + 1;
      }
      
      }
      
      return low;
  }
  
  
    function higherBound(N,K,arr) {
          
      let low = 0; 
      let high = N-1;
      
      while(low<=high) {
          
      let mid = Math.floor(low + (high-low)/2);
      
      if(arr[mid]>K){
        high = mid - 1;  
      } else {
          low = mid + 1;
      }
      
      }
      
      return low;
  }
  
  let frequency = higherBound(N,K,arr) -  lowerBound(N,K,arr);
  console.log(frequency);
  
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
      process.exit(0) ;
    });
  }