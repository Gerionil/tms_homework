
function iqTest(numbers){
    let numbersArray = numbers.split( ' ');
    let odd = numbersArray.filter(num => num % 2);
    let even = numbersArray.filter(num => !(num % 2));

    return even.length == 1 ? (numbersArray.findIndex(num => num === even[0]) + 1) : (numbersArray.findIndex(num => num === odd[0]) + 1);
  }