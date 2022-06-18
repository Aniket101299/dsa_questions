function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let q = +input[2];
    let line = 3;
    for(let i=0; i<q; i++) {
        num = +input[line++];
        console.log(Firstbigger(n,arr,num)); 
    }
}



function Firstbigger(n,arr,num) {

let ans = 999999999;
let c = 0;

for(let x=0; x<n; x++) {
    if(arr[x]>num) {
      if(ans>arr[x]) {
          ans = arr[x];
          c++;
      }
    } 
 }

if(c!==0) {
   return ans;    
} else {
   return -1; 
}


}










if (process.env.USERNAME === "ASUS") {
  runProgram(`10
  13 89 81 66 81 63 71 76 73 81
  2
  65
  15
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
    process.exit(0);
  });
}