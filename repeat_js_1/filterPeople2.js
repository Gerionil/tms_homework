
// Расширить предыдущее задание так чтобы из исходного массива удалялись все несовершенолетние пользователи.

let listOfPeople = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Pavel', age: 24},
    {name: 'Sasha', age: 29}
];


listOfPeople.forEach((person,index,array) => {
    if(person.age < 18){
        array.splice(index,1);
    }
})
