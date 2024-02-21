// console.log('hello world');
// let name;
// name = 'Sawa';
// console.log(name);
// let surname = 'Kubenko';
// console.log(surname);
// const age = 13;
// if (age > 18) {
//     console.log('Ты крутой')
// } else {
//     console.log('you are not cool')
// };
// function sayHello () {
//     console.log('Здравствуйте, я ваша тётя')
//     console.log('hello')
// };
// sayHello()
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(4, 8))
// function buildDate(day, month, year) {
//     return String(day) + '/' +  String(month) + '/' + String(year);
// }
// console.log(buildDate(29, 03, 1998))
// function isAdult(age) {
//     return age >=18
// }
// console.log(isAdult(18))
// function getMonthByNumber(a) {
//     switch (a) {
//         case 1:
//           a =  'Январь' ;
//           break;
//         case 2:
//           a =  'Февраль';
//           break;
//         case 3:
//           a =  'Март';
//           break;
//         case 4:
//           a =  'Апрель';
//           break;
//         case 5:
//           a =  'Май';
//           break;
//         case 6:
//           a =  'Июнь';
//           break;
//         case 7:
//           a =  'Июль';
//           break;
//         case 8:
//           a =  'Август';
//           break;
//         case 9:
//           a =  'Сентябрь';
//           break;
//         case 10:
//           a =  'Октябрь';
//           break;
//         case 11:
//           a =  'Ноябрь';
//           break;
//         case 12:
//           a =  'Декабрь';
//           break;
//         default:
//           alert( "Нет такого месяца" );
//       }
//       return a;
// } 
// console.log(getMonthByNumber(8))
// const plan = 10;
// let laps = 0;
// function run() {
//     laps = laps + 1;
// }
// while (laps < plan) {
//     run()
//     console.log(laps)
// }
// console.log('finished')
// for (let laps = 0; laps < 10 ; laps ++) {
//     console.log(laps)
// }
// console.log('finished')
// const classA = [];
// const classB = [ 'Sawa', 'Petya', 'Alla']
// for (let i = 0; i < classB.length; i++) {
//     console.log(classB[i])
// }
// classB.forEach(function (element) {
//     console.log(element);
// });
// const person = {};
// person.name = 'Sawa'
// person.city = 'Moscow'
// person.age = '25'
// console.log(person)
// const person = {
//     name: 'Sawa',
//     age: 25,
//     city: 'Moscow',

//     sayHi: function () {
//         console.log('Привет меня зовут' + ' ' + this.name)
//     }
// }
// person.sayHi()
// const people = [
//     {
//     name: 'Petya',
//     age: 21,
//     city: 'Moscow',
//     },
//     {
//         name: 'Sawa',
//         age: 25,
//         city: 'Moscow',
//     },
//     {
//         name: 'Max',
//         age: 24,
//         city: 'Sychi',
//     }
// ]
// people.push(
//     {
//         name: 'Den',
//         age: 26,
//         city: 'Komunarka'
//     }
// )
// people.forEach(function (person) {
//     console.log(person.name)
// })
// const printNumbers = [ -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// printNumbers.forEach(function (number) {
//     console.log(number)
// })
// function printNumbers() {
//     for (let index = -10; index <= 10; index++) {
//         console.log(index);
//     }
// }
// printNumbers()
const limit = 1000;
const expenses = [];
function trackExpense(money) {
    expenses.push(money) 
}
function calculate() {
    let sum = 0;
    expenses.forEach(function(expanse) {
        sum = sum + expanse;
    })
    return sum;
}
trackExpense(300);
trackExpense(2000);
trackExpense(25);
console.log(calculate())
function checkBalance() {
    if (limit > calculate()) {
        console.log('мы укладываемся');
    }
    else {
        console.log('Надо занимать')
    }
}
checkBalance();