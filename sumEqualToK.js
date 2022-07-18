// TWO Sum Problem
// Print the index of the 2 elements which will get summed up to a target value
//TEST CASE 1
// twoSum([1,8,11,15], 9)
// Result should be : 0,1

let arr = [1,8,11,15];
let n = arr.length;

let target = 26;

for(let i=0; i<n; i++) {
  for(let j=i+1; j<n; j++) {
    if( (arr[i] + arr[j]) == target) {
      console.log("indexes :", i , j);
    }
  }
}



let left = 0; 
let right = n-1;

while(left <= right) {
  if( (arr[left] + arr[right]) == target) {
    console.log("indexes :", left, right);
    left++;
    right--;
  } else if( (arr[left] + arr[right]) > target) {
    right--;
  } else {
    left++;
  }
}




