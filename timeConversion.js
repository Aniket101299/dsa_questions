// Input 

// 07:05:45PM

// Expected Output

// 19:05:45


function timeConversion(s) {
    let n = s.length;
    let arr = s.split("");
    if(s[n-2]+s[n-1] == "PM") {
        if(s[0]+s[1] == "12") {
             arr.splice(arr.length-2,arr.length-1);
             let y = arr.join("");
             return y;  
        } else {
        let x = +(s[0] + s[1]);
        x += 12;
         arr.splice(0,2);
         arr.splice(arr.length-2,arr.length-1);
        let y = arr.join("");
        return x+y;
        }
    } else {
        if(s[0]+s[1] == "12") {
            arr.splice(0,2);
            arr.splice(arr.length-2,arr.length-1);
            let y = arr.join("");
            return "00"+y;
        } else {
             arr.splice(arr.length-2,arr.length-1);
             let y = arr.join("");
             return y;  
        }
     
    }
 }