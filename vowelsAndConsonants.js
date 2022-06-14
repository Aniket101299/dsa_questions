function vowelAndConsonantCount(N, str) {
    //write code here
    var count =0;
    output = "";
    for (i=0; i<N; i++) {
    var vowel = "aeiou";
      for (j=0; j<vowel.length; j++) {
      if (str[i] == vowel[j]) {
      count++;
      }
      }
    }
    var consonant = (str.length - count);
    output = output + count + " " + consonant;
    console.log(output);
    
  }
  