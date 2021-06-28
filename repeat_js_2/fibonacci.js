//- Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); (При вызове функции положите n = 8);


function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  

  fibonacci(8);