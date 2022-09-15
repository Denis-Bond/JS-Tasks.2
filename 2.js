/* 1. Перепишите код с использованием тернарного оператора*/

/*let male = true;
let gender;
if (male) {
gender = 'man';
} else{
gender = 'woman'
}*/

let male = true;
let gender = (male === true) ? 'man' : 'woman';
console.log(gender);



/* 2. Создать переменную и записать в нее число, например 10.
10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.*/


let i = 10;
for (; i <= 20; i++) {
    console.log(i);
}




/* 3. Увеличивая счетчик цикла на 2, нужно 5 раз:
- запрашивать у пользователя ввод числа
- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"*/



for (i = 0; i < 9; i += 2) {

    let i = prompt();
    if (i == 10) {
        console.log('равно 10');
    } else {
        console.log('Не равно 10');
    }
}


/* 4. Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
 * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.*/


let numbers = prompt('Введите число')
for (i = 0; i < numbers; i++) {
    let num = i ** 2;
    if (numbers <= 100) {
        console.log(num);
    }

}


/* 5. Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»*/


for (i = 1; i < 101; i++) {
    let num3 = i % 3;
    let num5 = i % 5;

    line = '';
    if (num3 == 0 && num5 == 0) {
        line += 'FizzBuzz';
    } else if (num3 == 0) {
        line += 'Fizz';
    } else if (num5 == 0) {
        line += 'Buzz';
    }
    console.log(line ? line : i);
}


/* 6. Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}*/


let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i += 1;
}


/* 7. Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).*/


const cycle = (numbers1, numbers2) => {

    for (i = numbers1; i <= numbers2; i++) {
        let num = i ** 2;
        console.log(num);
    }
    return num;
}
cycle(2, 5);



/* 8. Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"

Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
Подсказка: 
Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
Одна функция может вызывать другую функцию*/



const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


const getRandomColor = () => {
    return `rgb(${getRandomInteger(0, 255)},${getRandomInteger(0, 255)},${getRandomInteger(0, 255)})`
}
console.log(getRandomColor());



/* 9. Написать функцию, которая принимает целое число n.   

Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.

Пример, при запуске функции с параметром 3:

"1 integer"
"1.5 decimal"
"2 integer"
"2.5 decimal"*/



const integer = (n) => {
    for (i = 1; i < n; i += 0.5) {
        if (Number.isInteger(i) == true) {
            console.log(`${i} integer`);
        } else {
            console.log(`${i} decimal`);
        }
    }
    return;
}
integer(3);