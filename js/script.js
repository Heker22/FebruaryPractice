/*
const totalPrice = 1000;
const discount = 0.1;
const discountedPrice = totalPrice * (1 - discount);

console.log(discountedPrice);



const name = 'Matviy Holovatyi';

console.log(name.length);

function checkNumber(){
    const value = Number(document.getElementById('number').value);
    const result = document.getElementById('result');

    if(value > 0){
        result.textContent = 1; 
    }
    else if(value < 0){
        result.textContent = -1;
    }
    else{
        result.textContent = 0;
    }
}*/

/*дз
Написати скрипт який порахує сумму всіх парних чисел в масиві


const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let total= 0;

 for( let number of numbers){
    if(number % 2 === 0){
        total += number
    }
 }

console.log(total)

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const total = array1.reduce( (acc, numb) => acc + numb, 0) + array2.reduce((acc, numb) => acc + numb, 0);

console.log(total)



function isEven(number){ 
return number % 2 === 0;

}

console.log(isEven(4));
console.log(isEven(3));

function hello2(name){

    console.log(`Hello ${name}!`)
}

hello2('Matviy')


function mul(n, m){
    return {
        product: n * m,
        sum: n + m,
        diffrence: n - m
    }
}

const result = mul(8, 3);
console.log(result.diffrence);
console.log(result.sum);
console.log(result.product);



const person = {
    name: 'Matviy',
    age: 13,
    gender: 'boy',

    body(){
        console.log(`My name is ${this.name}, i'm a ${this.gender} and i've got ${this.age} years`)
    }
}

person.body()


let option = 1;

let message;

switch(option){

    case 1:

    message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';

    break;

    case 2:

    message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';

    break;

    case 3:

    message = 'Посилка буде відправлена сьогодні';

    break;

    default:

    message = 'Вам передзвонит менеджер'
}

console.log(message)


let option = 'Tea';

let drink;

switch(option){
    
    case 'Tea':

    drink = 'The Tea cost you $3.50';

    break;

    case 'Coffee':

    drink = 'The Coffe is gonna cost you $2.50';

    break;

    case 'Juice':

    drink = 'For the Juice is gonna be $1.00';

    break;

    default:

    drink = 'Choose something to drink please';
}

console.log(drink);


let color = 'red';

let sign;

switch(color){

    case 'red':

    sign = 'STOP!';

    break;

    case 'yellow':

    sign = 'Please wait';;

    break;

    case 'green':

    sign = 'You are free to go';

    break;

    default:

    sign = 'The trafficlight doesnt work';
}

console.log(sign)

const car = {
    brand: 'Audi',
    model: 'RS6',
    year: '2022',
    color: 'Grey w/ Black rims',

    showValues(value){
        console.log(`My car its a ${this.color} ${this.brand}${this.model}, from ${this.year}.  `)
    }
}

car.showValues()


const players = [
{ id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
{ id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
{ id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
{ id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
{ id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


const totalTime = players.reduce((total, player) => {
    return total + player.timePlayed;
} , 0);

console.log(totalTime);

const sortedTime = [...players].sort((a, b) => {
    return b.timePlayed - a.timePlayed;
})

console.log(sortedTime)



const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
}, 0);

console.log(totalQuantity)
const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
  ];

const sortedName = [...arr].sort((a, b) => {
    return a.name.localeCompare(b.name)
} )

console.log(sortedName)


const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}

const {name, age, email} = user;

console.log(name);

console.log(age);

console.log(email);

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}

const {
    make,
    model,
    year,
    features,
    safety
} = car

console.log(make);3
console.log(model);
console.log(year);
console.log(features);
console.log(safety);

const {
    safety:{airbags, antilock_brakes,stability_control }
} = car;

console.log(airbags);
console.log(antilock_brakes);
console.log(stability_control);

const {
    features: [feature1, feature2, feature3]
} = car;

console.log(feature1);
console.log(feature2);
console.log(feature3);

const {
  make,
  model,
  year,
  features: [f1, f2, f3],
  safety: { airbags, antilock_brakes, stability_control }
} = car;*/

/*ДЗ:

const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}


const {
    count,
    list: [
        {title: t1, author: a1, year: y1},
        {title: t2, author: a2, year: y2},
        {title: t3, author: a3, year: y3}
    ]

} = books;

console.log(t1, a1, y1);
console.log(t2, a2, y2);
console.log(t3, a3, y3);



const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];

const finalArray = array1.concat(array2);

const result = finalArray.filter((item, idx) =>
     finalArray.indexOf(item) === idx )

console.log(result)


const people = [
    { name: 'John', age: 32, occupation: 'programmer' },
    { name: 'Jane', age: 26, occupation: 'teacher' },
    { name: 'Mike', age: 42, occupation: 'engineer' },
    { name: 'Emily', age: 17, occupation: 'designer' }
];

function selected(array) {

    return array.filter(person =>
        person.age >= 18)
        .map(person => person.name);
}

console.log(selected(people))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function result(array){
    return numbers.filter(num =>
     num % 2 === 0)
}

console.log(result(numbers));


const names = ['Matteo', 'Sofia', 'Gabriel', 'Franco', 'Paola'];

console.log(names.includes('Matteo'));//true
console.log(names.indexOf('Gabriel'));//2


const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

numbers.shift(1);
console.log(numbers)

const string = numbers.join();
console.log(string)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.indexOf(3));

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = array2.slice(0, 5);
console.log(result);
*/

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

/*
for(let i = 0; i <= friends.length; i++){
    string += friends[i]

    if(i < friends.length - 1){
        string += ', ';
    }
}

console.log(string);


console.log(friends.join(', '))

const array3 = ['Mango', 'Poly', 'Kiwi'];
array3.pop()

console.log(array3)


function findMaxNumber(arr) {

     let max = arr[0];

    for (let i = 1; i <= arr.length; i++) {

        if(arr[i] > max){

            max = arr[i];

        }
    }

    return max;
}

let array = [1, 3, 2, 5, 4];
let max = findMaxNumber(array);
console.log(max); // 5 

function mul(n, m) {

    return {

        total: n + m,
        difference: n - m,
        moltiplicaton: n * m
    }
}

const result = mul(20, 10);
console.log(result.total);
console.log(result.difference);
console.log(result.moltiplicaton);*/
/*
class Person {
    constructor =
}
const person1 = new Person('John', 'Doe'); console.log(person1.getFullName());  John Doe


const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

const total = cart.reduce((acc, product) => {
    return acc += product;
}, 0)
console.log(total);

let total = 0;

for(let i = 0; i < cart.length; i++){

    total += cart[i]
}
console.log(total);

const fruit = ['apple', 'lemon', 'orange', 'watermelon', 'mango'];
console.log(fruit[0]);

fruit[fruit.length - 1] = 'grape';
console.log(fruit);


const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numb.length; i++) {

    if (numb[i] % 2 === 0) {
        console.log(numb[i])
    }
}

const result = numb.filter(num => num % 2 === 0);
console.log(result);

const array = ['Mango', 'Poly', 'Kiwi', 'Matviy', 'Jack'];

for( let i = 0; i < array.length; i++){
    
    if(array[i].length > 5){
        console.log(array[i]);
    }
}

const result = array.filter(arr => arr.length > 5);
console.log(result);

let number = 15;

if(number > 10 && number < 20){
    console.log('Число входить в діапазон від 10 до 20');
}
else{
    console.log('Число не входить в діапазон від 10 до 20')
}*/

let word = 'Java';

if(word.includes('JavaScript')){
    console.log('Текст містить слово JavaScript')
}
else{
    console.log('Текст не містить слово JavaScript')
}