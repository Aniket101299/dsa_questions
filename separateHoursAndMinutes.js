function runProgram(input) {
    input = input.trim();
    let num = +input;
    console.log(SeparateHoursMinutes(num));
  }
  
  
  
function SeparateHoursMinutes(num) {

if(num<60) {
   return  `0:${num}`; 
} else {
    let x = Math.floor(num/60);
    let y = num%60;
    return (`${x}:${y}`);
}


}
  
  
  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`126`);
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