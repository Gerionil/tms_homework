// - Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов 



function getFuncCalls() {
    let count = 1;
  
    return function() {
      return count++; 
    };
  }
  
  let counter = getFuncCalls();