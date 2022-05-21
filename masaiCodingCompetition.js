function runProgram(input) {
    input = input.trim().split("\n");
    let Q = +input[0];
    let line = 1;
    let Queue = [];
    for(let i=0; i<Q; i++) {
      if(input[line].trim().length > 1) {
          let [E,club_Number,roll_Number] = input[line].trim().split(" ").map(Number);
          let arr = [club_Number,roll_Number];
          let flag = false;
          for(let j=Queue.length-1; j>=0; j--) {
              if(Queue[j][0] === club_Number) {
                  Queue.splice(j+1,0,arr);
                  flag = true;
                  break;
              }
          }
          if(flag === false) {
                Queue.push(arr);
          }
      } else {
          console.log(Queue[0].join(" "));
          Queue.shift();
      }
       line++;
    }

 }
 
  
  




 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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