// - Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
//  На основании этого массива создать новый массив arrUnique который будет представлять
//  собой массив arr но без дублирующихсяпо своим значениям элементам.
//  Использовать методы reduce и indexOf.

// let arr = ['Lena', 'Dima', 'Vlad', 'Alex', 'Lena', 'Alex', 'Nikita'];

let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
})
