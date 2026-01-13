// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
/**
 * Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
 */

const findKthPositive = (arr, k) => {
  let missingCount = 0;
  let currentNumber = 1;
  let arrIndex = 0;

  // We continue until we have found k missing numbers.
  while (missingCount < k) {
    // Check if the number from the array matches the current number we're looking for.
    if (arrIndex < arr.length && arr[arrIndex] === currentNumber) {
      // If it matches, it's not a missing number. Move to the next number in the array.
      arrIndex++;
    } else {
      // If it doesn't match, this number is missing. Increment our count of missing numbers.
      missingCount++;
    }
    // Move to the next positive integer for the next iteration.
    currentNumber++;
  }

  // Because currentNumber was incremented one last time after the k-th missing number was found,
  // the answer is currentNumber - 1.
  return currentNumber - 1;
};

// Example from the assignment:
const arr = [2, 3, 4, 7, 11];
const k = 5;
const result = findKthPositive(arr, k);
console.log(result); // Should output 9
