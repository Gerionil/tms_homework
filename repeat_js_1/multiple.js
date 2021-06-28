
// Напишите функцию mul(n,m), которая принимает два аргумента и возвращает 
// произведение этих аргументов. Проверьте ее работу.

function mul(n, m){
    if (isNaN(n) === false && isNaN(m) === false){
        return n * m;
    } else { 
        return console.log(`Один из аргументов не число`);
    }
    
}
mul();


