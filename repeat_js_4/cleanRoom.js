// Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... },
//  которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
// В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению 
// dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
// Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`);
//  где result это аргумент resolve.

function cleanRoom(dirtyLevel = 0){

    
    return new Promise(function(resolve,reject){
        if (dirtyLevel >= 0 && dirtyLevel <= 10){
        setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
        } else if(dirtyLevel > 10){
            setTimeout(() =>reject(dirtyLevel), dirtyLevel * 1000);
        }
    })
      
}

cleanRoom(12).then(
    result => console.log(`Уборка проведена за ${result} секунд`),
    err => console.log(`Уборка проведена со сложностями за ${err} секунд`)
);


// Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
// с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
// Текст ошибки придумайте сами.