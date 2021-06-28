

// Задание с прошлых занятий. Создать массив объектов для юзеров
//  [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
// Написать скрипт, который будет на выходе отдавать два массива.
//  Первый с совершеннолетними пользователями, второй с несовершеннолетними.
// !Использовать метод filter. Полученные на выходе два массива отсортировать (каждый из них в отдельности) 
//  по старшинству членов (от самого старшего к самому младшему).

let listOfPeople = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Pavel', age: 24},
    {name: 'Sasha', age: 29}
];

let before18 = listOfPeople.filter(person => person.age < 18).sort((a,b) => b.age - a.age);
let after18 = listOfPeople.filter(person => person.age >= 18).sort((a,b) => b.age - a.age);
