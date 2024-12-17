function palindrome(x){
      let str=x.toString();
    
      if(str===str.split('').reverse().join('')){
        console.log("true");
      }else{
          console.log("false");
          
      }
}
palindrome(121);