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

cleanRoom(5)
.then(
    result => {
        console.log('Первая комната убрана за ', result);
        return cleanRoom(2);
    }
)
.then (
    result => {
        console.log('Вторая комната убрана',result);
        return cleanRoom(4);
    }
)
.then (
    result => {
        console.log('Третья комната убрана. Уборка завершена',result);
    }
)
.catch( error => console.log('Невозможно. Уровень загрязнения',error))
