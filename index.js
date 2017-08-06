// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return reverseString(string.substring(1)) + string[0]
  } else {
    return string
  }
}


function isPalindrome(string){
  if (string.length === 0 || string.length === 1) {
    return true
  } if (string[0] === string[string.length - 1]){
    return isPalindrome(string.slice(1, string.length - 1))
  }
  return false
}


function addUpTo(array, index){
  var sum = 0
  if (index > 0) {
    return array[index] + addUpTo(array, --index)
  } else {
    return array[index]
  }
}

function maxOf(array){
  if (array.length === 1){
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, el){
  if (!array.length){
    return false
  } else if (array[0] === el){
    return true
  } else {
    return includesNumber(array.slice(1), el)
  }
}
