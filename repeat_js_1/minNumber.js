function getMinNumber(arr = []){
    arr.sort((a,b) => a - b);

    return arr.shift();

    // 2 метод
    //return Math.min(...arr);

}
getMinNumber();


let arr = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]

function list(names = []){
    
    return names.reduce((list, item,index,array) =>{
      if(index < (array.length-2)){
        list + item.name + ', '
      }else if (index == (array.length-2)){
        list + item.name + ' & ';
      }else{
        list + item.name;
      }
      
    },  '');
    
  }