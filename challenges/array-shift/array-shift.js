'use strict';
let arr = [4, 8, 15, 23, 42];
let value = 16;
function shift(arr, value) {
  let middle = Math.ceil(arr.length / 2);
  let newArr = [];
  let i;
  for (i = 0; i < middle; i++) {
    newArr[i] = arr[i];
  }
  if (i === middle) {
    newArr[i] = value;
    i++;
  }
  for (i = middle + 1; i < arr.length + 1; i++) {
    newArr[i] = arr[i - 1];
  }
  return newArr;
}
console.log(shift(arr, value));

shift(arr, value);
