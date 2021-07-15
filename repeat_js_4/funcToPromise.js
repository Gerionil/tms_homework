// Есть функция: function cleanRoom() {
//     setTimeout(() => console.log("Команата убрана"), 5000);
// }

// Данная функция отвечает за уборку комнаты, для этого ей надо время 5 секунд, после этого происхожит оповещение что комната убрана.
// Перепешите используя промисы.




function cleanRoom(){
    return new Promise(function(resolve, reject)  {
        setTimeout(() => resolve('Комната убрана'), 5000);
    });
}

cleanRoom().then(
    result => console.log(result)
);


