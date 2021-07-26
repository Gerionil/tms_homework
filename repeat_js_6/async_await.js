//последовательная уборка трех комнат
async function cleanRoom(dirtyLevel = 0) {
  let promise = new Promise(function (resolve, reject) {
    if (dirtyLevel >= 0 && dirtyLevel <= 4) {
      setTimeout(() => resolve(`Комната убрана за время ${dirtyLevel}`), dirtyLevel * 1000);
    } else if (dirtyLevel > 4) {
      setTimeout(() => reject("Ошибка"), dirtyLevel * 1000);
    }
  });
  let result = await promise;
}

cleanRoom(2);

async function cleanRooms(dirtyLevel_1 = 0, dirtyLevel_2 = 0, dirtyLevel_3 = 0){
    try{
    let result1 = await cleanRoom(dirtyLevel_1);
    let result2 = await cleanRoom(dirtyLevel_2);
    let result3 = await cleanRoom(dirtyLevel_3);
    console.log('Уборка завершена')
    }catch (error){
        console.log('НЕВОЗМОЖНО ЭТО УБРАТЬ')
    }
    
}

cleanRooms(1, 2, 3)



//параллельная уборка трех комнат


async function cleanRoom2(dirtyLevel = 0) {
    let promise = new Promise(function (resolve, reject) {
        if (dirtyLevel >= 0 && dirtyLevel <= 4) {
          setTimeout(() => resolve(`Комната убрана за время ${dirtyLevel}`), dirtyLevel * 1000);
        } else if (dirtyLevel > 4) {
          setTimeout(() => reject("Ошибка"), dirtyLevel * 1000);
        }
      });
      let result = await promise;
}


async function cleanRooms2(dirtyLevel_1 = 0, dirtyLevel_2 = 0, dirtyLevel_3 = 0) {
  try{
    let result = await Promise.all([
    cleanRoom2(dirtyLevel_1),
    cleanRoom2(dirtyLevel_2),
    cleanRoom2(dirtyLevel_3),
  ])

    console.log("Уборка выполнена")
} catch(error){
    console.log("Невозможно")
}
    
  
}
cleanRooms2(1, 2, 3);
