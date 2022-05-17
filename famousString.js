function runProgram(input) {
    input = input.trim().split("\n");
   
    let A = input[0].trim().split(""); 
    let B = input[1].trim().split(""); 
    let C = input[2].trim().split(""); 
    console.log(FamousStringInterleavingProblem(A,B,C)); 
}




function FamousStringInterleavingProblem(A,B,C) {
    
let x = A.length+B.length;
if(x==C.length) {
    for(let i=0; i<A.length; i++) {
        let count = 0;
        for(let j=0; j<C.length; j++) {
            if(A[i]==C[j]) {
                C[j] = -1;
                break;
            } else {
                count++;
            }
        }
        if(count==C.length) {
            return "No";
        }
    }
    for(let i=0; i<B.length; i++) {
        let countx = 0;
        for(let j=0; j<C.length; j++) {
            if(B[i]==C[j]) {
                C[j] = -1;
                break;
            } else {
                countx++;
            }
        }
        if(countx == C.length) {
            return "No";
        }
    }
    return "Yes";
} else {
    return "No";
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