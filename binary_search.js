const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

/**
 * Сложность алгоритма: O(logn), 
 * где n - количество элементов в массиве.
 * Для массива из 10 элементов понадобится примерно 4 итерации, для массива из 1000 элементов примерно 10.
 */
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return array[mid];
    }
    if (array[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
