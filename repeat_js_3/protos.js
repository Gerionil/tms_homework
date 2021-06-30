// Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
// Запишите поле name в переменную userName, поле year в переменную userYears, поле car в переменную userCar,
//  остальные поля записать в объект userOtherInfo;

let user = {
  name: "Ivan",
  years: 19,
  car: "Subaru",
  telePhone: "iPhone",
  city: "Minsk",
};

let userName;
let userYears;
let userCar;
let userOtherInfo;

function setUserInfo(name, years, car, ...otherInfo){
     userName = name;
     userYears = years;
     userCar = car;
     userOtherInfo = {...otherInfo};
};


setUserInfo(user.name, user.years, user.car, user.telePhone, user.city);
