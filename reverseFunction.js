function reverseString(inputStr) {
  let reversedStr = "";

  for (let i = inputStr.length - 1; i >= 0; i--) {
 
    reversedStr += inputStr[i];
  }
  
  return reversedStr;
}

const inputString = "hello world";
const outputString = reverseString(inputString);

console.log(outputString); // Output: "dlrow olleh"
