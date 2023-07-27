function findMostFrequentElement(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];

    if (frequency[number] === undefined) {
      frequency[number] = 1;
    } else {
      frequency[number]++;
    }
  }

  let mostFrequentNumber;
  let highestFrequency = 0;

  for (let number in frequency) {
    if (frequency[number] > highestFrequency) {
      mostFrequentNumber = number;
      highestFrequency = frequency[number];
    }
  }

  return Number(mostFrequentNumber);
}

let inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

let result = findMostFrequentElement(inputArray);

console.log("The most frequent number is:", result);
