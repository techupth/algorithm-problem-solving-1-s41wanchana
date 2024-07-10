function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let sum = 0;
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (sum == target) {
        result.push(i, j);
      }
    }
  }
  return console.log(result);
}

const numbers_1 = [2, 7, 11, 15];
const numbers_2 = [2, 7, 11, 15];

twoSum(numbers_1, 9);
twoSum(numbers_2, 23);
