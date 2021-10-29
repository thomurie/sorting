/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, low = 0, high = arr.length - 1) {
  let pIdx = low;
  let pivot = arr[pIdx];

  while (low < high) {
    while (low < arr.length && arr[low] <= pivot) {
      low++;
    }
    while (arr[high] > pivot) {
      high--;
    }
    if (low < high) [arr[low], arr[high]] = [arr[high], arr[low]];
  }
  [arr[high], arr[pIdx]] = [arr[pIdx], arr[high]];
  return high;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const p = pivot(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
  return arr;
}

module.exports = { pivot, quickSort };
