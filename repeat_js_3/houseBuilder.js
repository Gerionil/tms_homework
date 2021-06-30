// Создайте функцию-конструктор houseBuilder, которая позволяет создавать
// объект дачного дома с параметрами ширины длины и количества этажей.
// Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора.
// (Длина, ширина, количество этажей - числовой тип данных, значения придумайте сами). 


function HouseBuilder(width, length, floorAmount){
    this.width = width;
    this.length = length;
    this.floorAmount = floorAmount;
    this.totalArea;
}


let firstHouse = new HouseBuilder(20, 30, 3);

let secondHouse = new HouseBuilder(20, 50, 2);



// Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома.
// Данный метод занести в прототип конструктора. Вызвать данный метод на каждом созданном объекте
// и результат записать в поле totalArea каждого объекта. 

function calcArea (){
    
    return this.width * this.length * this.floorAmount;
}

HouseBuilder.prototype.calcArea = calcArea();

