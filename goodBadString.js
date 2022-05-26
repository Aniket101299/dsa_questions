function runProgram(input) {
    input = input.trim().split("\n");
    let T= +input[0]; let line=1;
    for(let i=0; i<T; i++){
        let arr= input[line++].trim().split("");
        console.log(GoodBad(arr));
    }
}
function GoodBad(arr){
    let ans='';
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]!=arr[i+1]){
            // arr.splice(i,1);
            ans+=arr[i];
        }
        
    }
    ans+=arr[arr.length-1];
    return ans;
}



if (process.env.USERNAME === "ASUS") {
  runProgram(`3
  abb
  aaab
  ababa`);
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








