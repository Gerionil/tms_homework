
// Написать функцию  sum(a, b), которая возвращает сумму переданных ей аргументов.
//  Реализовать с помощью function declaration и с помощью стрелочной функции. !!!Использовать цикл "for in" если это возможно.


// Function declaration

function sum(a,b){
    if (isNaN(a) === false && isNaN(b) === false){
        return (a + b);
    } else { 
        return console.log(`Один из аргументов не число`);
    }
    
}

sum();
// Arrow function

let sum = (a,b) => {
    if (isNaN(a) === false && isNaN(b) === false){
        return (a + b);
    } else { 
        return console.log(`Один из аргументов не число`);
    }
}







// let arr = [1, 2,3,4,5,8,9];
// let sum = arr.reduce((sum,current) => sum + current, 0);



// let arr = [1, 2,3,4,5,8,9];
// let sum2 = arr.reduce(function(sum,current){
//     return sum + current;
// },0);