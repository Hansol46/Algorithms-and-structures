const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

/**
 * @param {Array} array Массив чисел
 * @param {Number} item Число которое необходимо найти
 */
const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return null;
};

console.log(linearSearch(array, 5)); // 2 - index нашего числа
console.log(linearSearch(array, 11)); // 10 - index нашего числа
console.log(linearSearch(array, 7)); // 7 - index нашего числа
