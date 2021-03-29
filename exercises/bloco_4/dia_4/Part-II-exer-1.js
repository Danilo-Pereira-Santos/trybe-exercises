function checkPalindrome(word){
  word = word.toLowerCase();
  let palindrome = '';
  for (let index = word.length - 1; index >= 0 ; index -= 1 ){
    palindrome += word[index];
  }
  if (word === palindrome){
    return true;
  }else{
    return false;
  }
}

console.log(checkPalindrome('desenvolvimento'));