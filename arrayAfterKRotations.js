// Q.2 You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

// Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.

let Arr = [1,2,3,4,5,6,7,8,9,10];
let N = 10; 
let  K = 13;

var NumOfRotations;

if(K>=N) {
  NumOfRotations = K%N; 
} else {
  NumOfRotations = K;
}

let rotatedArray = [];

for(let i=NumOfRotations; i<N; i++) {
  rotatedArray.push(Arr[i]);
}
for(let i=0; i<NumOfRotations; i++) {
  rotatedArray.push(Arr[i]);
}

console.log(rotatedArray);