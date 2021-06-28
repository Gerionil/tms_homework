// Дан массив пользователей. var users = [
//     {id: 1, name: "Вася", age: 20},
//      {id: 2, name: "Петя", age: 19},
//      {id: 3, name: "Маша", age: 18}
//  ];
// Добавить в этот маccив еще одного пользователя {id: 4, name: "Дима", age: 17}.
//  Инвертируйте данный массив и выведите возраст пользователя с именем "Петя".

// - В массиве users посчитайте общий суммарный возраст всех пользователей.



let users = [
  { id: 1, name: 'Вася', age: 20 },
  { id: 2, name: 'Петя', age: 19 },
  { id: 3, name: 'Маша', age: 18 },
];

users.push({id: 4, name: 'Дима', age: 17});


users.forEach((person) =>{
    if(person.name === 'Петя'){
        return console.log(person.age);
    }
})


let sumOfAllAges = users.reduce((sum,current) => sum += current.age,0);