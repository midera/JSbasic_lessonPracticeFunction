/* створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
 а виводить найбільше (Math використовувати заборонено);
*/
/*
let numberArray = [21,52,74,78,45,65,41,89,78,741];
function returnMaxNumber (numberArray){
    let max = numberArray[0];
    let min = numberArray[0];
     for (let i = 0; i < numberArray.length; i++) {
      if(max<numberArray[i]) max= numberArray[i];
       if  (min>numberArray[i]) min= numberArray[i];
    }
    return max;
}
 const min = returnMaxNumber(numberArray);
console.log(min);
*/
/*Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
    Що б я міг сам вибрати повернути мені масив ключів чи масив значень.*/

/*   let user= [{name: 'Dima', age: 13}, {model: 'Camry'}];
const findKeysValues = (array,values) => {
    let counter = [];
    if (values) {
        for (const item of array) {
            for (const key in item) {
                counter.push(item[key]);
            }
        }
        }else{
            for (const item of array) {
                for (const key in item){
                    counter.push(item[key]);
                }
            }
        }
    return counter
    }

console.log(findKeysValues(user));*/

/* Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
/*let arrayOne = [9,8,0,4];
function redGo (arr,index){
    let arrTwo = [...arr];
 if (index< arr.length -1){
     let values = arrTwo[index];
     arrTwo[index] = arrTwo[index +1];
     arrTwo[index +1] = values;
 }
 return arr;
}
const redGo1= redGo(arrayOne,2);
console.log(arrayOne);
console.log(redGo1);*/

/*
Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок
не нульових значень.
    Двожина масиву від 2 до 100
EXAMPLE:
    [1,0,6,0,3] => [1,6,3,0,0]
    [0,1,2,3,4] => [1,2,3,4,0]
    [0,0,1,0]   => [1,0,0,0]*/
/*function myValues (array) {
    let nothing =[];
    let numb =[];
    for (const item of array) {
        if (item === 0) nothing.push(0);
    else {
        numb.push(item);
    }
    }
    return numb.concat(nothing);
}

console.log(myValues([1, 0, 6, 0, 3]));
console.log(myValues([0,1,2,3,4]));
console.log(myValues( [0,0,1,0]));*/

