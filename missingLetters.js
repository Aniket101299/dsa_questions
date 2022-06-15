function runProgram(input) {
    input= input.trim().split("\n");
    let T= +input[0]; line=1;
    for(let i=0; i<T; i++){
        let arr= input[line++].trim().split(" ").map(Number);
        console.log(FindMissing(arr));
    }
  }
  function FindMissing(arr) {
      for(let i=0; i<13; i++){
          if(i !==arr[i]){
              return i;
          }
      }
  }
  if (process.env.USERNAME === "ASUS") {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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