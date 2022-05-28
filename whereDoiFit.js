function runProgram(input) {
    input= input.trim().split("\n");
    let T= +input[0];line=1;
      for(let i=0; i<T; i++){
          let N= +input[line++];
          let arr= input[line++].trim().split(" ").map(Number);
          console.log(FindPosition(N,arr));
      }
  }
  function FindPosition(N,arr){
      let less="Front"; let max= "Last";
      for(let i=0; i<arr.length; i++){
          if(arr[i]>N){
              if(i===0){
                  max=arr[i];
                  less="Front";
                  let ans= less + " " + max;
                  return ans;
              }
              else{
                  less= arr[i-1];
                  max= arr[i];
                  let ans= less + " " + max;
                  return ans;
              }
          }
          else if(i==arr.length-1 && arr[i]<N){
              less= arr[i];
              max= "Last";
              let ans= less + " " + max;
                  return ans;
          }
      }
  }
  
  
  
  if (process.env.USERNAME === "ASUS") {
    runProgram(`3
    3
    1 4 5 6 8 9
    5 
    1 2 6 7 8
    1
    2 3 4 5 6`);
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