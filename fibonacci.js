function fibs(number) {
  let arr = [0, 1];
  for (let i = 2; i < number; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

//recursion version
function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}
