function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let [L,R] = input[1].trim().split(" ").map(Number);
    let arr = [];
    for(let i=1; i<=N; i++) {
    arr.push(+i);
    }
    console.log(ProblemOfPlagiarism(N,arr,L,R));  
    
}



function ProblemOfPlagiarism(N,arr,L,R) {
    
  let count = 0;
  let res = [];
   const permutations = (arr2) => {
      if (arr2.length==arr.length) {
        let sum = 0;
        for(let j=L; j<=R; j++) {
          sum+= arr2[j];
        }
        if(sum%2 === 1) {
          count++;
        }
      } else {
          for(let e of arr)
          if (!arr2.includes(e))
          permutations([...arr2, e]);  
      }
   };
   
   permutations([]);
   


return count;

}



if (process.env.USERNAME === "ASUS") {
  runProgram(`3
  0 1`);
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