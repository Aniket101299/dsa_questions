function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for(let i=0; i<testCases; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=> a-b);  
        console.log(Majorityelement(n,arr)); 
    }
  
}



function Majorityelement(n,arr) {
    
    if(n==1) {
        return arr[0];
    }

let count = 0;
let obj = {};

   for(let i=0; i<n; i++) {
      if(arr[i]==arr[i+1]) {
          count++;
      } else {
          obj[arr[i]] = count + 1;
          count = 0;
      }
   }
   
//   console.log(obj);
   let valArr = Object.values(obj);
   let keyArr = Object.keys(obj);
//   console.log(valArr);
//     console.log(keyArr);
    let max = 0;
    let index = -1;
    for(let x=0; x<valArr.length; x++) {
        if(valArr[x]>max) {
            max = valArr[x];
            index = x;
        }
    }
    if(max>n/2) {
         return keyArr[index];
    } else {
        return -1;
    }
   
    
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