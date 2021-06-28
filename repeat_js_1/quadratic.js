// Задание со звездочкой. Пишем функцию решения квадратного уравнения через дискриминант:
// 		ax² + bx + c = 0 (общий вид уравнения)
// 		D = b2 – 4ac
// 		D > 0
// 		x1 = (-b + √D ) / 2a
// 		x2 = (-b – √D ) / 2a
// 		D = 0
// 		x = -b / 2a
// 		D < 0 - прекращаем решать уравнение;





function solveQuadratic(a = 1, b = 0, c = 0){

    let discriminant = (b**2) - (4 * a * c);
    if (discriminant > 0 ){
        let x1 = ( -b + (discriminant ** (1/2)) ) / (2 * a);
        let x2 = ( -b - (discriminant ** (1/2)) ) / (2 * a);
        return console.log( x1, x2);
    } else if (discriminant === 0){
        let x = (-b) / (2 * a);
        return console.log(x);
    } else {
        return undefined;
    }
}
solveQuadratic(2,2,2);
