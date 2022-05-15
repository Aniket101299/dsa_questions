function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let line = 1;
    
    for(let i=0; i<n; i++) {
        if(input[line].length>3) {
            let [method,num] = input[line].trim().split(" ");
            num = +num;
            pushFun(method,num);
        } else if(input[line] == "POP") {
            popFun();
        } else {
            minFun();
        }
        line++;
    }
  }
  
  let stack = [];
  
  function pushFun(method,num) {
      stack.push(num);
  }
  
  
   function popFun() {
     if(stack.length===0) {
         console.log("EMPTY");
     } else {
        stack.pop(); 
     } 
  }
  
  
    function minFun() {
     if(stack.length===0) {
         console.log("EMPTY");
     } else {
          let minValue = Math.min(...stack);
         console.log(minValue);
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
      process.exit(0) ;
    });
  }