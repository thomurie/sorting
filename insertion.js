function insertionSort(arr) {
  let b, key, a;
  // start with the second element
  for (b = 1; b < arr.length; b++) {
    key = arr[b];
    a = b - 1;

    // compare second to previous
    // iterate through sorted protion and insert the element in the correct place.
    while (a >= 0 && arr[a] > key) {
      arr[a + 1] = arr[a];
      a = a - 1;
    }
    arr[a + 1] = key;
  }
  return arr;
}

module.exports = insertionSort;
