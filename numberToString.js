// Q.1 Create a function that takes a number as an input and returns the
// number in words( without using third-party packages).
// Range 1-1000(both number inclcusive)
// For example
// Input -555 Output - FIve hundred and fifty five
// Input -560 Output - FIve hundred and sixty

function NumberToWord(num) {
    let x = num.toString();
    let n = x.length;
    let wordArr = [];
  
  
    if( (x[n-2] + x[n-1]) == "11") {
      wordArr.push("eleven");
    } else if( (x[n-2] + x[n-1]) == "12") {
      wordArr.push("twelve");
    } else if( (x[n-2] + x[n-1]) == "13") {
      wordArr.push("thirteen");
    } else if( (x[n-2] + x[n-1]) == "14") {
      wordArr.push("fourteen");
    } else if( (x[n-2] + x[n-1]) == "15") {
      wordArr.push("fivteen");
    } else if( (x[n-2] + x[n-1]) == "16") {
      wordArr.push("sixteen");
    } else if( (x[n-2] + x[n-1]) == "17") {
      wordArr.push("seventeen");
    } else if( (x[n-2] + x[n-1]) == "18") {
      wordArr.push("eighteen");
    } else if( (x[n-2] + x[n-1]) == "19") {
      wordArr.push("nineteen");
    } else {
        
    if(x[n-1] == "1") {
      wordArr.push("one");
    } else if(x[n-1] == "2") {
      wordArr.push("two");
    } else if(x[n-1] == "3") {
      wordArr.push("three");
    } else if(x[n-1] == "4") {
      wordArr.push("four");
    } else if(x[n-1] == "5") {
      wordArr.push("five");
    } else if(x[n-1] == "6") {
      wordArr.push("six");
    } else if(x[n-1] == "7") {
      wordArr.push("seven");
    } else if(x[n-1] == "8") {
      wordArr.push("eight");
    } else if(x[n-1] == "9") {
      wordArr.push("nine");
    } 
  
   }
  
  
    if(x[n-2] == "2") {
      wordArr.push("twenty");
    } else if(x[n-2] == "3") {
      wordArr.push("thirty");
    }  else if(x[n-2] == "4") {
      wordArr.push("fourty");
    }  else if(x[n-2] == "5") {
      wordArr.push("fifty");
    }  else if(x[n-2] == "6") {
      wordArr.push("sixty");
    }  else if(x[n-2] == "7") {
      wordArr.push("seventy");
    }  else if(x[n-2] == "8") {
      wordArr.push("eighty");
    }  else if(x[n-2] == "9") {
      wordArr.push("ninety");
    }
  
  
    if(x[n-3] == "1") {
      wordArr.push("one hundred and");
    } else if(x[n-3] == "2") {
      wordArr.push("two hundred and");
    } else if(x[n-3] == "3") {
      wordArr.push("three hundred and");
    } else if(x[n-3] == "4") {
      wordArr.push("four hundred and");
    } else if(x[n-3] == "5") {
      wordArr.push("five hundred and");
    } else if(x[n-3] == "6") {
      wordArr.push("six hundred and");
    } else if(x[n-3] == "7") {
      wordArr.push("seven hundred and");
    } else if(x[n-3] == "8") {
      wordArr.push("eight hundred and");
    } else if(x[n-3] == "9") {
      wordArr.push("nine hundred and");
    }
  
  
   
  let word = "";
  
  for(let i=wordArr.length-1; i>=0; i--) {
     word+= wordArr[i] + " ";
  }
    
  
    if(x == "10") {
      return "ten";
    } else if(x == "11") {
      return "eleven";
    } else if(x == "12") {
      return "twelve";
    } else if(x == "13") {
      return "thirteen";
    } else if(x == "14") {
      return "fourteen";
    } else if(x == "15") {
      return "fifteen";
    } else if(x == "16") {
      return "sixteen";
    } else if(x == "17") {
      return "seventeen";
    } else if(x == "18") {
      return "eighteen";
    } else if(x == "19") {
      return "nineteen";
    } else if(x == "20") {
      return "twenty";
    }  else if(x == "30") {
      return "thirty";
    }  else if(x == "40") {
      return "fourty";
    }  else if(x == "50") {
      return "fifty";
    }  else if(x == "60") {
      return "sixty";
    }  else if(x == "70") {
      return "seventy";
    }  else if(x == "80") {
      return "eighty";
    }  else if(x == "90") {
      return "ninety";
    }  else if(x == "100") {
      return "hundred";
    }  else if(x == "200") {
      return "two hundred";
    }  else if(x == "300") {
      return "three hundred";
    }  else if(x == "400") {
      return "four hundred";
    }  else if(x == "500") {
      return "five hundred";
    }  else if(x == "600") {
      return "six hundred";
    }  else if(x == "700") {
      return "seven hundred";
    }  else if(x == "800") {
      return "eight hundred";
    }  else if(x == "900") {
      return "nine hundred";
    }  else if(x == "1000") {
      return "thousand";
    }  else  {
      return (word);
    }
  
  }
  
  
  console.log(NumberToWord(151));
  
  
  