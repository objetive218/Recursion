function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let res = [];
  let leftI = 0;
  let rightI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      res.push(left[leftI]);
      leftI++;
    } else {
      res.push(right[rightI]);
      rightI++;
    }
  }
  return res.concat(left.slice(leftI)).concat(right.slice(rightI));
}
