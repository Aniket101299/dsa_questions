function runProgram(input) {
    input = input.trim(); 
    console.log(circularPrinter(input)); 
}



function circularPrinter(str) {

let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function alphabet(char) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == char) {
            return i;
        }
    }
}

let time = 0;
let current = 0;

for(let i=0; i<str.length; i++) {
    let index = alphabet(str[i]);
    let position1 = Math.abs(current - index);
    let position2 = Math.abs(26 - position1);

    if(position1 < position2) {
        time+= position1;
        current = index;
    } else {
        time+= position2;
        current = index;
    }
}

return time;

}



if (process.env.USERNAME === "ASUS") {
  runProgram(`AZGB`);
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