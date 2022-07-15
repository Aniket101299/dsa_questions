function runProgram(input) {
    input = input.trim(); 
    console.log(CheckPangram(input)); 
}



function CheckPangram(arr) {

let out = "";
let n = arr.length;

for(let i=0; i<n; i++) {
    let str = arr[i];
    let obj ={};
    for(let j=0; j<str.length; j++) {
        if(str[j] != " ") {
            obj[str[j]] = 1;
        }
    }

    let check = Object.keys(obj);

    if( check.length == "26" ) {
        out+= "1"; 
    } else {
        out+= "0";
    }
}

    return out;

}



if (process.env.USERNAME === "ASUS") {
  runProgram(`["pack my box with five dozen liquor jugs", "this is not a pangram"]`);
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