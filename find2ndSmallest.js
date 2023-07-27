function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must contain at least two elements");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("No second smallest element found in the array");
    }
  
    return secondSmallest;
  }
  

const numbers = [10, 5, 2, 7, 8];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest Number:", secondSmallest); // Output: 5
