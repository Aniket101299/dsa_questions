function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let OriginalStrengthOfDogs = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b);
    let CalorieValueOfFood = input[2].trim().split(" ").map(Number).sort((a,b)=> a-b);
   
    console.log(MyLoveForDogs(n,OriginalStrengthOfDogs,CalorieValueOfFood));
  }
  
  
  
  function MyLoveForDogs(n,OriginalStrengthOfDogs,CalorieValueOfFood) {
  
  let MaxSum = 0;
  
  for(let i=0; i<n; i++) {
     MaxSum = MaxSum + (OriginalStrengthOfDogs[i]*CalorieValueOfFood[i]);
  }
  
  return MaxSum;
 
   }
  
  
  
  
  if (process.env.USERNAME === "ASUS") {
    runProgram(`2
    3 1
    4 3`);
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