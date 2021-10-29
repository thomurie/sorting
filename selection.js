function selectionSort(arr) {
  let i, j, min_idx;

  for (i = 0; i < arr.length - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < arr.length; j++) if (arr[j] < arr[min_idx]) min_idx = j;

    let temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

module.exports = selectionSort;

// Javascript program for implementation of selection sort
