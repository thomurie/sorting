function getMax(arr) {
  let mx = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > mx) mx = arr[i];
  return mx;
}

// A function to do counting sort of arr[] according to
// the digit represented by exp.
function countSort(arr, exp) {
  let output = new Array(arr.length); // output array
  let i;
  let count = new Array(10);
  for (let i = 0; i < 10; i++) count[i] = 0;

  for (i = 0; i < arr.length; i++) count[Math.floor(arr[i] / exp) % 10]++;

  for (i = 1; i < 10; i++) count[i] += count[i - 1];

  for (i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (i = 0; i < arr.length; i++) arr[i] = output[i];
}

function radixSort(arr) {
  // Find the maximum number to know number of digits
  let m = getMax(arr);

  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) countSort(arr, exp);

  return arr;
}

function digitCount(num) {
  return String(num).split("").length;
}

function mostDigits(arr) {
  if (arr.length === 0) return 0;
  let most = 0;
  arr.forEach((e) => {
    if (e > most) most = e;
  });
  return digitCount(most);
}

function getDigit(params) {}

module.exports = { radixSort, mostDigits, digitCount };
