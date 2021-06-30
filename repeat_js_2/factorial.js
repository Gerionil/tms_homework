
//- Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); (При выозове полжите n = 10); 


function factorial(n) {
    return (n <= 1) ? n * factorial(n - 1) : 1;
  }

factorial(10);

