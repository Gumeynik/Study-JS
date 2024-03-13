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
// console.log(person)




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


// function includes(numbers, number) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === number) {
//             return true;
//         } 
//     }
//     return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 2));

// function  createPerson(name, surname, age) {
//     const person = {
//         name: name,
//         surname: surname,
//         age: age,
//     }
//     return person;
// }
// console.log(createPerson('sawa', 'kubenko', 25))
function createPerson(name, age) {
    const person = {
        name: name,
        age: age,
    }
    return person
}
function findOldest(people) {
    let oldestPerson = 0;
    people.forEach(function (person, index) {
        if (person.age > people[oldestPerson].age) {
            oldestPerson = index;
        }
    }
    );

    return people[oldestPerson].name
}
const people = [
    createPerson('Qnach', 320),
    createPerson('Chromov', 65),
    createPerson('Sitnikov', 55)
];
console.log(findOldest(people))