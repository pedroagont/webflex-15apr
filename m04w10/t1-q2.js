/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function (number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 *    Sorted: [0, 1, 2, 3, 4, 5, 6, 6, 9]
 *
 * Returns:
 *
 *    4
 */

const median = function (arr) {
  // sort the input array
  const sorted = [...arr];
  sorted.sort((a, b) => a - b);

  // get the middle value
  const middleIndex = Math.floor(sorted.length / 2);

  // return the rounded result
  if (sorted.length % 2 === 0) {
    const rightSideMiddle = sorted[middleIndex];
    const leftSideMiddle = sorted[middleIndex - 1];
    const avg = (leftSideMiddle + rightSideMiddle) / 2;
    return round(avg);
  }

  return sorted[middleIndex];
};

const result = median([6, 2, 3, 4, 9, 6, 1, 0, 5]);
console.log(result);

// Don't change below:
module.exports = { median };
