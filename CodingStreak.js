function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let allStr = [];
    let line = 1;
    for(let i=0; i<n; i++) {
       let str = input[line++].trim(); 
       allStr.push(str);
    }
    console.log(CodingStreak(n,allStr));
  }
  
  
  
function  CodingStreak(n,allStr) {

let LongestCodingStreakDay = 0;
let LongestCodingStreakDayAll = 0;


let wholeStr = ""; 

 for(let i=0; i<n; i++) {
     str = allStr[i];
    
     wholeStr+= str;

     let count = 0;
     for(let i=0; i<str.length; i++) {
         if(str[i]==="C") {
             count++;
         } else {
             if(count>LongestCodingStreakDay) {
                 LongestCodingStreakDay = count;
             }
              count = 0;
         }
     }
     
     if(count>LongestCodingStreakDay) {
        LongestCodingStreakDay = count;
    }
 }
 
//  console.log(wholeStr);
 
 
 let count1 = 0;
 
 for(let i=0; i<wholeStr.length; i++) {
    
         if(wholeStr[i]==="C") {
             count1++;
         } else {
             if(count1>LongestCodingStreakDayAll) {
                 LongestCodingStreakDayAll = count1;
             }
              count1 = 0;
         }
 }
 
   
 
 return `${LongestCodingStreakDay} ${LongestCodingStreakDayAll}` ;
   
}








  
  
 
  if (process.env.USERNAME === "ASUS") {
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
      process.exit(0) ;
    });
  }