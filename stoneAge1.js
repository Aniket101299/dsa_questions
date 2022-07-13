function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(StoneAgeGameI(n,arr));
    }
  }
  
  
  
function StoneAgeGameI(n,arr) {

let left = 0;
let right = n-1;

let ram = 0;
let shyam = 0;

let maxStone = 0;
let check = false;

ram+= arr[left];
shyam+= arr[right];

while(left < right) {
  
  if(ram == shyam) {
      if(ram > maxStone) {
          maxStone = ram;
      }
      check = true;
      left++;
      ram+= arr[left];
  } else if(ram>shyam) {
      right--;
      shyam+= arr[right];
  } else {
      left++;
      ram+= arr[left];
  }
  
}


if(check === true) {
    return maxStone;
} else {
    return 0;
}


}
  
  
  
  
  
  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`2
    5
    100 8 97 2 1
    5
    100 9 96 2 1`);
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