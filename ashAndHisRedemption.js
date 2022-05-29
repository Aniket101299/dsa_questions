function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
    let n = +input[line++];
    let AshPokemonHP = input[line++].trim().split(" ").map(Number).sort((a,b)=> a-b);
    let GaryPokemonHP = input[line++].trim().split(" ").map(Number).sort((a,b)=> a-b);
  
    console.log(AshAndHisRedemption(n,AshPokemonHP,GaryPokemonHP));  
    }
}



function AshAndHisRedemption(n,AshPokemonHP,GaryPokemonHP) {

for(let i=0; i<n; i++) {
    if(AshPokemonHP[i]<=GaryPokemonHP[i]) {
        return "Train Hard Again";
    }
}

return "Ash Finally Wins";

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