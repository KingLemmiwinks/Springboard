// Frequency array to count numbers
function createFrequencyCounter(array) {
  return array.reduce(function (accumulator, next) {
    accumulator[next] = (accumulator[next] || 0) + 1;
    return accumulator;
  }, {});
}

function convertNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}

function findMean(numbers) {
  if (numbers.length === 0) return 0;
  return (
    numbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }) / numbers.length
  );
}

function findMedian(numbers) {
  // sort and get the middle element

  numbers.sort((a, b) => a - b);

  let middleIndex = Math.floor(numbers.length / 2);
  let median;

  if (numbers.length % 2 === 0) {
    median = (numbers[middleIndex] + numbers[middleIndex - 1]) / 2;
  } else {
    median = numbers[middleIndex];
  }
  return median;
}

function findMode(array) {
  let frequencyCounter = createFrequencyCounter(array);

  let count = 0;
  let mostFrequent;

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > count) {
      mostFrequent = key;
      count = frequencyCounter[key];
    }
  }
  return +mostFrequent;
}

module.exports = {
  createFrequencyCounter,
  convertNumsArray,
  findMean,
  findMedian,
  findMode
};