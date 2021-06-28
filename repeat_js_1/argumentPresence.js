
// Есть функция function f(x) {
//     //Тело функции (ваш код здесь должен быть)
// }
// Научиться отличать отсутсвие аргументов у функции или то что первый аргумент undefined. 
// Если аргументов нет то функция возвращает 0, если аргумент undefined то возвращает 0. 
// Дополнительное задание: реализовать функцию function f(x) как стрелочную.


function showArgPresence(x){
    if (arguments.length === 0 || arguments[0] === undefined){
        return console.log('0');

    }
    else {
        return (console.log(arguments.length));
    }
}

showArgPresence();




// arrow function


let showArgPresence1 = (x) => {
    // if (arguments.length === 0 || arguments[0] === undefined){
    //     return console.log('0');

    // }
    // else {
    //     return (console.log(arguments.length));
    // }


    return console.log(arguments.length);
}


showArgPresence1();







let arr1 = [1,2,2,1,4];
let arr2 = [1,2];

let difference = arr1.filter(x => arr2.indexOf(x) == -1);