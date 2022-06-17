function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let ArrivalTime = input[1].trim().split(":").join("").split(" ").map(Number);  
    let DepartureTime = input[2].trim().split(":").join("").split(" ").map(Number);  
    console.log(Majorityelement(n,ArrivalTime,DepartureTime)); 
    
  
}



function Majorityelement(n,ArrivalTime,DepartureTime) {

let Platform = 0;

    let count = 0;
    for(let k=1; k<n; k++) {
    if( ArrivalTime[k] < DepartureTime[k-1] ) {
        count++;
    } else {
        Platform++;
    }
  }

if(Platform!==0) {
    return count;
} else {
   return count+1; 
}

}



if (process.env.USERNAME === "ASUS") {
  runProgram(`6
  9:00 9:40 9:50 11:00 15:00 18:00
  9:10 12:00 11:20 11:30 19:00 20:00`);
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