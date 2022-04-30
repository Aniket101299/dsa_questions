function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(MasaiQuizCompetition(n,arr)); 
    }
}



function MasaiQuizCompetition(n,arr) {
    
let groups = 0;    
let count = 0;
    
for(let i=0; i<n; i++) {
    
    if(arr[i]===1) {
       count++;
    } else {
        if(count>=1) {
            groups++;
        }
        count = 0;
    }
}

if(groups === 0 && count>=1) {
    return 1;
} else if(arr[n-1] === 1 && groups>0) {
   return groups + 1; 
} else {
    return groups;
}


}







if (process.env.USER === "ASUS") {
  runProgram(`2
  5
  1 1 0 1 1
  4
  1 1 1 1`);
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