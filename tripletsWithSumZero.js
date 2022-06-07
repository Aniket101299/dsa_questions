function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b);
    console.log(TripletsWithSumZero(n,arr));
  }
  
  
  
function  TripletsWithSumZero(n,arr) {

// Brute Force approach

// let count = 0;

// for(let i=0; i<n-2; i++) {
//     for(let j=i+1; j<n-1; j++) {
//         for(let k=j+1; k<n; k++) {
//             if(arr[i]+arr[j]+arr[k] === 0) {
//                 count++;
//             }
//         }
//     }
// }

// return count;



// Two pointer approach



let count = 0;

for(let i=0; i<n-2; i++) {
    let left = i+1; 
    let right = n-1;
    
    while(left<right) {
        if((arr[i]+arr[left]+arr[right]) === 0) {
            count++;
            left++;
        } else if((arr[i]+arr[left]+arr[right]) < 0) {
            left++;
        } else {
            right--;
        }
    }

  }
  
  return count;
  
}








  
  
 
  if (process.env.USERNAME === "ASUS") {
    runProgram(`4
    -1 -1 -2 3`);
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