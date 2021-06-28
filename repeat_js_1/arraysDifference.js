// 1 способ

let arr1 = [1,2,2,1,4];
let arr2 = [1,2];

let difference = arr1.filter(x => arr2.indexOf(x) == -1);



// 2 cпособ

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

  