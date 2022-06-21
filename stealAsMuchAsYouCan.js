function runProgram(input) {
    input = input.trim().split("\n");
    let C = +input[0];
    let n = +input[1];
    let GemsValues = input[2].trim().split(" ").map(Number);
    let GemsWeight = input[3].trim().split(" ").map(Number);
  
    console.log(StealAsMuchAsYouCan(C,n,GemsValues,GemsWeight));  
    
}



function StealAsMuchAsYouCan(C,n,GemsValues,GemsWeight) {

let RatioValuesAndWeight = [];

for(let i=0; i<n; i++) {
    let ratio = GemsValues[i]/GemsWeight[i];

   RatioValuesAndWeight.push( [ratio,GemsValues[i],GemsWeight[i]] );
}

RatioValuesAndWeight.sort((a,b)=> b[0]-a[0]);

let MaxValue = 0;
let FinalWeight = 0;

for(let i=0; i<n; i++) {
    
  FinalWeight = FinalWeight + RatioValuesAndWeight[i][2];
  MaxValue = MaxValue + RatioValuesAndWeight[i][1];
  
  if(FinalWeight > C) {
  FinalWeight = FinalWeight - RatioValuesAndWeight[i][2];
  MaxValue = MaxValue - RatioValuesAndWeight[i][1];  
  let RemainingWeight = C - FinalWeight;
  
  MaxValue = MaxValue + (RatioValuesAndWeight[i][0]*RemainingWeight);
  return Math.round(MaxValue);
  }
  
}

return Math.round(MaxValue);

}



if (process.env.USERNAME === "ASUS") {
  runProgram(`50 
  3
  60 100 120 
  10 20 30`);
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