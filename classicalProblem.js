function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let line = 1;
   
    for(let i=0; i<n ;i++) {
        let str = input[line++].trim();
        let x = str.length;
        console.log(BalancedBrackets(x,str));
    }
  
 }
 
  
  

function BalancedBrackets(x,str) {
    
    if(x%2===1) {
        return "not balanced";
    }

    let stack = [];
    for(let i=0; i<x; i++) {
        if(str[i] == "{" || str[i] == "(" || str[i] == "[") {
            stack.push(str[i]);
        } else if(str[i] == "}") {
            if(stack.length!==0  &&  stack[stack.length-1] === "{") {
                stack.pop();
            } else {
              return "not balanced";  
            }
        } else if(str[i] == ")") {
            if(stack.length!==0  &&  stack[stack.length-1] === "(") {
                stack.pop();
            } else {
              return "not balanced";  
            }
        }  else if(str[i] == "]") {
            if(stack.length!==0  &&  stack[stack.length-1] === "[") {
                stack.pop();
            } else {
              return "not balanced";  
            }
        }
    }
    
    return "balanced";

}



 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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