function lonelyinteger(a) {
    let obj = {};
    let c = a.length;
    for(let i=0; i<c; i++) {
        if(obj[a[i]] === undefined) {
           obj[a[i]] = 1; 
        } else {
           obj[a[i]] = obj[a[i]] + 1; 
        }
    }
    
     let x = Object.values(obj);
     let y = Object.keys(obj);
   
     for(let i=0; i<x.length; i++) {
         if(x[i] == 1) {
             return y[i];
         }
     }
 }