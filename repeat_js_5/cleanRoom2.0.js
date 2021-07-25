// Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
// Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. 
// Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
// cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргумента, каждый из которых описывает 
// уровень загрязнения каждой комнаты.


function cleanRoom(dirtyLevel = 0){

    return new Promise(function(resolve,reject){
        if (dirtyLevel >= 0 && dirtyLevel <= 4){
        setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
        } else if(dirtyLevel > 4){
            setTimeout(() =>reject(dirtyLevel), dirtyLevel * 1000);
        }
    })
    
}
function cleanRooms(dirtyLevel_1 = 0, dirtyLevel_2 = 0, dirtyLevel_3= 0 ){
    cleanRoom(dirtyLevel_1)
.then(
    result => {
        console.log(`Первая комната убрана за ${result}`);
        return cleanRoom(dirtyLevel_2);
    }
)
.then (
    result => {
        console.log(`Вторая комната убрана за ${result}`);
        return cleanRoom(dirtyLevel_3);
    }
)
.then (
    result => console.log(`Третья комната убрана за ${result}. Уборка завершена!`)
)
.catch( error => console.log('Невозможно. Уровень загрязнения',error))
}


cleanRooms(1,2,3);

// На основанни задачи из прошлого дамашнего задания сделайте так, чтобы можно было осуществить параллельную уборку трех комнат. 
// 	  Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки. 
// 	  Если одна из комнат оказалась слишком грязной(условие при котором такое происхожит описано в предыдущем ДЗ), 
// 	  то пекращаем уборку полностью. Для этого функция cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } 
// 	  должна принимать три аргемента, каждый из кторых описывает уровень загрязнения каждой комнаты. 



function cleanRoom2(dirtyLevel = 0){

    return new Promise(function(resolve,reject){
        if (dirtyLevel >= 0 && dirtyLevel <= 4){
        setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
        } else if(dirtyLevel > 4){
            setTimeout(() =>reject(dirtyLevel), dirtyLevel * 1000);
        }
    })
    
}

function cleanRooms2(dirtyLevel_1 = 0, dirtyLevel_2 = 0, dirtyLevel_3= 0 ){
    Promise.all([
        cleanRoom2(dirtyLevel_1),
        cleanRoom2(dirtyLevel_2),
        cleanRoom2(dirtyLevel_3),
    ]).then(
        result => console.log('Уборка выполнена'),
        err => console.log('Невозможно')
    )
}
cleanRooms2(1,2,3);
