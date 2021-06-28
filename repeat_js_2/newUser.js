// Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, city.
// С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте сами. 

function User(first_name, second_name, age, city){
    this.name = first_name;
    this.surname = second_name;
    this.age = age;
    this.city = city;
}


let firstUser = new User('John', 'Rider', 23, 'Abu-Dhabi');
let secondUser = new User('Alex', 'Stevenson', 25, 'Oslo');


// Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании.
// Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта. 


function showInfo(){
    return `Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}, City: ${this.city},`
}

let infoFirstUser = showInfo.bind(firstUser);

let infoSecondUser = showInfo.bind(secondUser);


infoFirstUser();
infoSecondUser();