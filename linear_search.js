const array = [15, 4, 5, 8, 5, 11, 2, 7, 5, 12, 44];

/**
 * Сложность алгоритма: O(n), 
 * где n - количество элементов в массиве.
 * (для массива из 10 элементов будет 10 операций, для массива из 1000 элементов - 1000 операций)
 */
const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch(array, 5)); // 2 - index нашего числа
console.log(linearSearch(array, 11)); // 10 - index нашего числа
console.log(linearSearch(array, 7)); // 7 - index нашего числа
