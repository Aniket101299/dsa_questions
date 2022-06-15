function runProgram(input) {
    input= input.trim().split("\n");
    let S= input[0].trim();
    if(S.length%2==1){
        let L=0; let R=S.length-1;
        let Lr= ((S.length-1)/2)-1; let Rl= (S.length+1)/2;
        let Y=S[Lr+1];
        console.log(ReverseThis(S,L,Lr,Y,Rl,R));
    }
    else{
        let L=0; let R=S.length-1;
        let Lr= ((S.length)/2)-1; let Rl= (S.length)/2;
        let Y="";
        console.log(ReverseThis(S,L,Lr,Y,Rl,R));
    }
}
function Rever(arr, L, R){
    while(L<R){
        let temp= arr[L];
        arr[L]= arr[R];
        arr[R]= temp;
        L++;R--;
    }
    let out='';
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==undefined){
            out=out+arr[i];
        }
    }
    return out;
}
function ReverseThis(S,L,Lr,Y,Rl,R){
    let arr1=[];let arr2=[];
    for(let i=L; i<S.length; i++){
        if(i>=L && i<=Lr){
            arr1.push(S[i]);
        }
        else if(i>=Rl && i<=R){
            arr2.push(S[i]);
        }
    }
    
let X= Rever(arr1, L, Lr);
let Z= Rever(arr2, L, Lr);

let ans= X+Y+Z;
    return ans;
}


if (process.env.USERNAME === "ASUS") {
  runProgram(`abcxyz`);
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