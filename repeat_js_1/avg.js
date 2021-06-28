// Создайте функцию avg() , которая будет находить среднее арифметическое значение своих аргументов.

function avg(...nums) {
  
//     if (typeof num === "number" && !isNaN(num)) {
//     } else {
//       return console.log(`Один из аргументов не число`);
//     }

//   return nums.reduce((sum, current) => sum + current, 0) / nums.length;

  if (nums.every(num => typeof num === "number" && !isNaN(num))){
    return nums.reduce((sum, current) => sum + current, 0) / nums.length;
  } else {
      return 'Не число '
  }
}

avg();
