function cleanRoom(dirtyLevel = 0) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel >= 0 && dirtyLevel <= 4) {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    } else if (dirtyLevel > 4) {
      setTimeout(() => reject(dirtyLevel), dirtyLevel * 1000);
    }
  });
}

async function cleanRoom(dirtyLevel = 0) {
  let promise = new Promise(function (resolve, reject) {
    if (dirtyLevel >= 0 && dirtyLevel <= 4) {
      setTimeout(() => resolve(`Комната убрана за время ${dirtyLevel}`), dirtyLevel * 1000);
    } else if (dirtyLevel > 4) {
      setTimeout(() => reject("Ошибка"), dirtyLevel * 1000);
    }
  });
  let result = await promise;
  console.log(result);
}

cleanRoom(2);

async function cleanRooms(dirtyLevel_1 = 0, dirtyLevel_2 = 0, dirtyLevel_3 = 0){
    let result1 = await cleanRoom(dirtyLevel_1);
    let result2 = await cleanRoom(dirtyLevel_2);
    let result3 = await cleanRoom(dirtyLevel_3);
    console.log('Уборка завершена')
}

cleanRooms(1, 2, 3);

function cleanRooms(dirtyLevel_1 = 0, dirtyLevel_2 = 0, dirtyLevel_3 = 0) {
  cleanRoom(dirtyLevel_1)
    .then((result) => {
      console.log(`Первая комната убрана за ${result}`);
      return cleanRoom(dirtyLevel_2);
    })
    .then((result) => {
      console.log(`Вторая комната убрана за ${result}`);
      return cleanRoom(dirtyLevel_3);
    })
    .then((result) =>
      console.log(`Третья комната убрана за ${result}. Уборка завершена!`)
    )
    .catch((error) => console.log("Невозможно. Уровень загрязнения", error));
}



function cleanRoom2(dirtyLevel = 0) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel >= 0 && dirtyLevel <= 4) {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    } else if (dirtyLevel > 4) {
      setTimeout(() => reject(dirtyLevel), dirtyLevel * 1000);
    }
  });
}

function cleanRooms2(dirtyLevel_1 = 0, dirtyLevel_2 = 0, dirtyLevel_3 = 0) {
  Promise.all([
    cleanRoom2(dirtyLevel_1),
    cleanRoom2(dirtyLevel_2),
    cleanRoom2(dirtyLevel_3),
  ]).then(
    (result) => console.log("Уборка выполнена"),
    (err) => console.log("Невозможно")
  );
}
cleanRooms2(1, 2, 3);
