// const person = {
//     name: 'Sawa',
//     surname: 'kubenko',
//     age: 25,
//     city: 'moscow',
//     getFullName: function() {
//         return `${this.name} ${this.surname}`;
//     },
//     isAdult: function () {
//         return this.age > 18
//     }
// }
// console.log(person.getFullName())
// console.log(person.isAdult())




// const people = [ 
//     {
//         name: 'Sawa',
//         age: 25,
//         city: 'moscow',
//     },
//     {
//         name: 'petya',
//         age: 22,
//         city: 'moscow',
//     },
//     {
//         name: 'Max',
//         age: 23,
//         city: 'sychi',
//     },]
// people.forEach(man => {
//     console.log(man.name, man.age, man.city)
// });
// function printNumbers() {
//  for (let index = -10; index <= 10; index++) {
//     console.log(index)
//  }  
// }
// printNumbers()

// function printNumbersByRange(start, end){
//  for (let index = start; index <= end; index++) {
//     console.log(index)
//  }  
// }
// printNumbersByRange(-3, 2)

// function calculateNumbersSum(numbers){
//     let sum = 0;
//     numbers.forEach(function(number) {
//             sum = sum + number;
//     });
//     return sum
// }
// console.log(calculateNumbersSum([-10, 1, 2, 4, 9]))


function includes(numbers, number) {
    numbers.forEach(function(item) {
        numbers = number;
        if (number === item) {
            return numbers
        } else if (number != item) {
          return number;
        }
    });
}
console.log(includes([1, 2, 3, 5], 5))

// function includes(numbers, number) {

//         numbers.forEach(function (item) {
//             if (number === item) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
//     }

//     );
// }
// includes([1, 2, 3], 3)
