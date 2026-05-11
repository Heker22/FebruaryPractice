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
}

const { createElement } = require("react");

дз
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
} = car;

const { createElement } = require("react");

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


const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

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
}

let word = 'Java';

if(word.includes('JavaScript')){
    console.log('Текст містить слово JavaScript')
}
else{
    console.log('Текст не містить слово JavaScript')
}


class Rectangle {

    constructor(
        width, height
    ){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(10, 5); 
console.log(rectangle1.getArea());


class Calculator {

    constructor(){
        
    }
    add(a, b){

        return a + b
    };

    subtract(a, b){

        return a - b
    };

    divide(a, b){

        if( b === 0){
            return 'You cant divide by 0'
        }

        return a / b
    };

    multiply(a, b){
        return a * b
    };
}


glculator.add(2, 3)); // 5
 console.log(calculator.subtract(5, 2)); // 3
 console.log(calculator.multiply(2, 4)); // 8
 console.log(calculator.divide(10, 2)); // 5
 console.log(calculator.divide(10, 0)); // На нуль ділити не можна

class Animal {
    constructor(name) {
        this.name = name

    }
}

class Dog extends Animal {
    constructor(name, breed) {

        super(name);
        this.breed = breed;

    }
}




const myDog = new Dog('Buddy', 'Labrador Retriever');
console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }


class Student {
    constructor(name, grade) {

        this.name = name;
        this._grade = grade;
    }

    get info() {
        return `Name: ${this.name}, Grade: ${this._grade}`;
    }

    set grade(value) {

        if (value >= 0 && value <= 100) {
            this._grade = value
        } else {
            console.log('Некоректна оцінка')
        }
    }

}


const student1 = new Student('Matviy', 85)
student1.grade = 95; 

console.log(student1.info)

function Account({login, email}){

    this.login = login;
    this.email = email
}

Account.prototype.getInfo = function(){
    console.log(`Login = ${this.login}, email = ${this.email}`)
}

console.log(Account.prototype.getInfo); // funzione

const mango = new Account({
login: 'Mangozedog',
email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
login: 'Poly',
email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com


class Person {
    constructor(name, age) {

        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, position){
        super(name, age);
        this.position = position;
    }

    getInfo(){
        return `${this.name} is a ${this.position} and is ${this.age} years old`
    }
}


const john = new Employee("John", 32, "programmer");
console.log(john.getInfo()); // "John is a programmer and is 32 years old"


class Product {
    constructor(name, price, discount){
        this.name = name;
        this.price = price, 
        this.discount = discount
    }

    getDiscountPrice(){
        if(this.discount){

            return this.price - (this.price * this.discount / 100)
        }

        return this.price
    }
}


const product1 = new Product('Telefono', 500, 10);
console.log(product1.getDiscountPrice()); // 450*/

/*дз 1

const text = document.getElementById('textInput');
const button = document.getElementById('btn');
button.addEventListener( 'click', function(){
    button.textContent = text.value});



/*дз 2

const img = document.querySelector('img');
img.src = './img/nature2.jpg'

/*дз 3

const firstItem = document.querySelector('.list li');
firstItem.textContent = 'new'


const list = document.querySelector('.site-nav');
list.style.backgroundColor = 'yellow';

const firstLink = document.querySelector('.site-nav a');
firstLink.classList.add('site-nav-link');

const link = document.querySelector(' a[href="https://"]');
link.style.fontSize = '30px'
link.style.color = 'green'



const links = document.querySelectorAll('ul a');
links.forEach(link => {
    if(link.href.startsWith('http://')){
        link.style.color = 'orange';
    }
})

const firstLink = links[0];
const lasttLink = links[links.length - 1];

firstLink.classList.add('first-link');
lasttLink.classList.add('last-link')

const title = document.querySelector('h1');
title.classList.add('title')
title.classList.replace('title', 'new-title');
title.textContent = 'Hello worlddd';
title.style.color = 'green';
title.style.fontSize = '30px';
title.style.textAlign = 'center';

const listLink = document.querySelector('a[name = "list"]')
console.log(listLink.classList.contains('list'))

const title = document.createElement('h1');
title.textContent = 'Привіт, це мій перший створений елемент!';
title.classList.add('title');
title.style.textAlign = 'center';
title.style.color = 'red'
document.body.appendChild(title);

const list = document.createElement('ul');
for(let i = 1; i <= 5; i++){
    const item = document.createElement('li')
    item.textContent = `item${i}`;
    list.appendChild(item);
}

document.body.appendChild(list);


const list = document.getElementById('ingredients');
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const items = ingredients.map(item => {
      const li = document.createElement('li');
      li.textContent = item;
      return li
} )
list.append(...items);



const input = document.getElementById('input');
const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
    const name = input.value;
    message.textContent = `Hello, ${name}`
})
const button = document.getElementById('btn');
/*button.addEventListener('click', function(){
    button.style.backgroundColor = 'red';
})

const colors = ['red', 'blue', 'green', 'purple', 'yellow'];
let index = 0;

button.addEventListener('click', function(){
    button.style.backgroundColor = colors[index];
    index = (index+1) % colors.length;
})


const form = document.getElementById('form');
const text = document.getElementById('text');

form.addEventListener('submit', function(event){
    event.preventDefault();
    text.textContent = 'Ви зареєструвалися успішно! Дякую!'
})

const bigger = document.getElementById('bigger');
const smaller = document.getElementById('smaller');
const text = document.getElementById('text');
let size = 16;

bigger.addEventListener('click', function(){
    size += 2;
    text.style.fontSize = size + 'px';
})

smaller.addEventListener('click', function(){
    size -= 2;
    text.style.fontSize = size + 'px';
})


const background = document.getElementById('box');
document.addEventListener('keydown', function(event){
    if(event.key === 'y'){
        background.style.backgroundColor = 'yellow';
    }
    else if(event.key === 'g'){
        background.style.backgroundColor = 'green';
    }
    else if(event.key === 'r'){
        background.style.backgroundColor = 'red';
    }
})

const text = document.getElementById('text');
document.addEventListener('keydown', function(event){
    text.textContent = 'code:' + event.code
})

const json = `
[
{ "name": "Ivan", "age": 20, "isStudent": true },
{ "name": "Maria", "age": 25, "isStudent": false },
{ "name": "Petro", "age": 17, "isStudent": true }
]`

const users = JSON.parse(json);
const students = users.filter(user => user.isStudent).map(user => user.name);
console.log('students:', students.join(', '));

const age = users.reduce((acc, user) =>
 { return acc + Number(user.age)}, 0);
const middleAge = age / users.length;
console.log('Middle age:', middleAge.toFixed(2));
console.log(typeof users[0].age)

const input = document.getElementById('input');
const save = localStorage.getItem('message-text');
if(save){
    input.value = save;
}
input.addEventListener('input', (event) => {
    localStorage.setItem('message-text', event.target.value)
})

function fn(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function clear(){
    localStorage.clear()
};

function result(){
    return localStorage.length
};

function remove(key){
    return localStorage.removeItem(key);
}

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {

    event.preventDefault();
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const user = {
        name: name,
        age: age,
        email: email
    };
    localStorage.setItem('user-data', JSON.stringify(user));
    alert('Your info has been saved!');
    form.reset();
});

localStorage.clear()

const btn = document.getElementById('btn');
const count = document.getElementById('count');
let countNum = localStorage.getItem('clickCount')
countNum = countNum ? Number(countNum) : 0;
count.textContent = countNum; 

btn.addEventListener('click', () => {

    countNum++ ; 
    count.textContent = countNum;
    localStorage.setItem('clickCount', countNum );
})


console.log('First log');

setTimeout(() => {
    console.log('Second log');
}, 0 );


console.log('Third log');

const timer = setTimeout(callback, delay, arg1, arg2)

const timer = setTimeout(() => {
    console.log('Hello')}, 3000);

clearTimeout(timer);

const timer1 = setInterval(() => {
    console.log('Hello')}, 3000);

clearInterval(timer1);

const box = document.getElementById('box');
function getRandomColor(){
    const colors =  ['red', 'green', 'skyblue', 'yellow', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(() => {
    box.style.backgroundColor = getRandomColor();
}, 1000);


let counter = 0;
const count = document.getElementById('count');
const stop = document.getElementById('stop');
const interval = setInterval(() => {
    counter++;
    count.textContent = counter;
}, 1000);
count.style.textAlign = 'center';
stop.addEventListener('click', () => {
    clearInterval(interval);
})


function submit(text, delay){
    setTimeout(() => {
        document.getElementById('text').textContent = text;
    }, delay);
}

document.getElementById('show').addEventListener('click', () => {
    submit('Hello this is my message', 1000);
})

const box = document.getElementById('box');
function big(){
    return Math.floor(Math.random() * 200) + 50;
}

setInterval(() => {
    const newWidth = big();
    const newHeight = big();
    box.style.width = newWidth + 'px';
    box.style.height = newHeight + 'px';
}, 4000);

let count = 0;
const list = document.getElementById('list');
const interval = setInterval(() => {
    count++;
    const li = document.createElement('li');
    li.textContent = 'Message' + count;
    list.appendChild(li);
    if(count === 5){
        clearInterval(interval);
    }
}, 2000)

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    const seconds = Number(input.value);

    if(seconds <= 0 || isNaN(seconds) ){
        text.textContent = 'Submit correct number!'
        return
    }
    text.textContent = 'Meanwhile grab a coffee'
    setTimeout(() => {
        text.textContent = `${seconds} seconds passed`
    }, seconds * 1000)
})
const texts = ['Hello', 'Bye', 'Whats up'];
const text = document.getElementById('text');
let index = 0;

setInterval(() => {
    index++;

    if(index > texts.length){
        index = 0;
    }

    text.textContent = texts[index];
}, 2000);

const title = document.getElementById('title');
const colors = ['red', 'green', 'yellow', 'blue'];
let index = 0;

setInterval(() => {

    title.style.color = colors[index];

    index++;

    if(index >= colors.length){
        index = 0;
    }
    
}, 1000);


const box = document.getElementById('box');
let position = 0;
let size = 100;
const interval = setInterval(() => {
    position += 5;
    box.style.left = position + 'px';
    size += 5;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    if(position > 150){
        box.style.backgroundColor = 'red';
    }
    if( position > 500 ){
        clearInterval(interval);
    }
},100);

let minutes = 40;
let seconds = 30;
const timer = document.getElementById('text');

function updateTimer() {
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    timer.textContent = `${m} : ${s}`;

    if (minutes === 0 && seconds === 0) {
        timer.textContent = 'timer has ended!';
        clearInterval(interval);
        return
    }

    seconds--;

    if (seconds < 0){
        seconds = 59;
        minutes--;
     }
}

const interval = setInterval(updateTimer, 1000);
updateTimer()


let time = 10000;
const timer = document.getElementById('timer');
const interval = setInterval(() => {

    time--;
    timer.textContent = (time / 1000).toFixed(3);

    if(time <= 5000 ){
        document.body.style.backgroundColor = 'red';
    } 

    if(time <= 0){
        clearInterval(interval);
        timer.textContent = 'timer has ended!';

    }
},1);


const timer = document.getElementById('timer');
const message = document.getElementById('text');
let time = 20;

const interval = setInterval(() => {
    
    timer.textContent = time;

    if(time === 10){
        message.textContent = 'timer has ended';
    }

    if(time === 0){
        message.textContent = 'timer finished';
        clearInterval(interval);
        return
    }

    time--;

}, 1000 );
*/

/*ДЗ для 13/04/26

const timer = document.getElementById('timer');
const image = document.getElementById('img');
let time = 15;

const interval= setInterval(() => {
    timer.textContent = time

    if(time === 0){
       image.style.display = 'block';
       clearInterval(interval);
       return
    }

    time--;
},1000);




const date = new Date(2026, 3, 14, 14, 45, 30, 200);
console.log(date) //Tue Apr 14 2026 14:45:30 GMT+0200 (Ora legale dell’Europa centrale)

const date = new Date();
console.log('Date: ' + date );
console.log(date.getDate());
console.log(date.getDay())// 2
console.log(date.getMonth())// 3
console.log(date.getFullYear())// 2026
console.log(date.getHours())// 15
console.log(date.getMinutes())// 7
console.log(date.getSeconds())// 15
console.log(date.getTime())

const date = new Date();
console.log(`Час в мс з початку епохи Unix: ${date.getTime()}`);

let result = 'Date: ';

result += date.getFullYear() + '/';
result += date.getMonth() + '/';
result += date.getDate() + '. Day of week:';
result += date.getDay() + '. ';

result += 'Time: ' + date.getHours() + ':';
result += date.getMinutes() + ':';
result += date.getSeconds();

console.log(result); //Date: 2026/3/14. Day of week:2. Time: 15:31:36

//Set

const date = new Date(2017, 6, 14, 5, 40, 0, 0);
console.log(`2017, 6, 14, 5, 40 represents ${date.getTime()}`)//2017, 6, 14, 5, 40 represents 1500003600000;

const secondDate = new Date();
console.log(secondDate)//Tue Apr 14 2026 15:36:48 GMT+0200 (Ora legale dell’Europa centrale)
console.log(secondDate.setFullYear(2017, 6, 4));// 1499175488222


//16.04

let date = new Date();

const options = {
    weekday: 'long',
    year: 'numeric',
    motnh: 'short',
    days: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
}

const locateUA = date.toLocaleString('es-IT', options);
console.log(locateUA); //

const locateUS = date.toLocaleString('en-US', options);
console.log(locateUS)


let start = Date.now();

for(let i = 0; i < 100000; i++ ){
    let doSmth = i*i*i;
}

let end = Date.now();
console.log(`Time occuped ${end - start}ms`)



function getYear(date){
    return new Date(date).getFullYear()
};

console.log(getYear('2026-05-17T15:22:30'))

function isWeekend(date){
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
}

console.log(isWeekend('2026-05-16'));




let start = Date.now();

for(let i = 0; i < 100000; i++ ){
    let doSmth = i*i*i;
}

let end = Date.now();
console.log(`Time difference ${end - start}ms`)


function getSecondsToTomorrow(){
    let today = new Date();
    let tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()+1);
    const result = tomorrow - today;
    return Math.round(result / 1000);
    
}

console.log(getSecondsToTomorrow())


function getSecondsToBirthday(birthday){
    let today = new Date();
    let nextBirthDay = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
    );

    if(nextBirthDay < today){
        nextBirthDay.setFullYear(today.getFullYear()+1);
    }
    const result = nextBirthDay - today;
    return Math.ceil(result / (1000 * 60 * 60 * 24))
}

const birthday = new Date(1997,1,20);
console.log(getSecondsToBirthday(birthday))


function getYears(birthday){
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    
    if(months < 0 || (months === 0 && today.getDate() < birthday.getDate() )){
        age--;
    }
    return age
}

const birthday = new Date(2012,8,10);
console.log(getYears(birthday));

function getDate(date){    
    return date.getMinutes();
}
const now = new Date()
console.log(getDate(now))

function getDays(today1, day1){
    let today =  new Date(today1);
    let day = new Date(day1);
    const getTime = Math.abs(day - today);
    const days = Math.floor(getTime / (1000 * 60 * 60 * 24));
    return days;
}

console.log(getDays('2026-04-27','2026-05-06'));


function getBirthday(birthday){
    const today = new Date();
    const birth = new Date(birthday);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    const day = today.getDate() - birth.getDate();

    if(month < 0 || (month === 0 && day < 0)){
        age--;
    }

    return age;
};

console.log(getBirthday('2012-08-10'));


const isSuccess = true;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve('Success!');
        }
        else {
            reject('Error!')
        }
    })
}, 2000);



promise.then(value => {console.log('value')})
.catch(error => {console.log('error')})
.finally(()=> {console.log('promise settled')})
*/




/*
const fetchUserFromServer = (username, onSuccess, onError) => {

    setTimeout(() => {

        const isSuccess = true;

               if (isSuccess) {
            resolve('Success!');
        }
        else {
            reject('Error!')
        }
}, 2000)

};

const onFetchSuccess = user => {
    console.log(user);
};

const onFetchError = error => {
    console.log(error)
}

fetchUserFromServer('Bob', onFetchSuccess, onFetchError);


const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
      console.log(`Fetching data for ${username}`);
   
      setTimeout(() => {
        // Change value of isSuccess variable to simulate request status
        const isSuccess = true;
   
        if (isSuccess) {
          resolve("success value");
        } else {
          reject("error");
        }
      }, 2000);
    });
   };
   
   fetchUserFromServer("Mango")
    .then(user => console.log(user))
    .catch(error => console.error(error));



function promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise executed');
        }, 2000);
    })

}

promise().then((value) => { console.log(value) });

function checkNumbers(array){
    return new Promise((resolve,reject) => {
        const hasOdd = array.some(numb => numb % 2 !== 0);

        if(hasOdd){
           reject('Ci sono numeri dispari ');
        }
        else{
            resolve('Function executed');
        }
    })
}

checkNumbers([2, 4, 6, 8, 10])
.then((value) => {console.log(value)})
.catch((error) => {console.log(error)});



function getImage(image){
    return new Promise ((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img)
        };
        img.onerror = () => {
            reject('Image has not downloaded')
        };
        img.src = image;
    } )  
 }

getImage('https://www.instagram.com/p/DJ6TP76I3X2/')
.then(img => {document.body.appendChild(img)})
.catch((error) => {console.log(error)})


function getNumbers(numb1, numb2) {
    return new Promise((resolve, reject) => {
        if (typeof numb1 !== 'number' || typeof numb2 !== 'number') {
            reject('You need to insert numbers')
        }
        else {
            resolve(`Your result is ${numb1 + numb2}`);
        }
    })
}

getNumbers(5, 6)
    .then(value => { console.log(value) })
    .catch(error => { console.log(error) })

function getPeople(people){
    return new Promise((resolve, reject) => {
        if(!Array.isArray(people)){
            reject('Argument is an Array')
            return
        }
        const names = people.map(person => person.name).sort((a, b) => a.localeCompare(b));
        resolve(names)
    })
}



const people = [
    { name: "John", age: 25 },
    { name: "Anna", age: 30 },
    { name: "Peter", age: 40 },
    { name: "Mary", age: 35 },
  ];

getPeople(people)
.then(value => {console.log(value)})
.catch(error => {console.log(error)})


function randomPromise(){
    return new Promise((resolve, reject) => {
        const num = Math.random() > 0.5;

        if(num){
            resolve()
        }
        else{
            reject()
        }
    })
}

randomPromise()
.then(() => {console.log('Success')})
.catch(() => {console.log('Rejected')})
.finally(() => {console.log('Promise done')})


const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(ms), ms)
    })
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

//Promise.all - returns array

const makePromise = (text, delay) => {
   return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay)
   });
 }
 const promiseA = makePromise('promiseA value', 4000)
 const promiseB = makePromise('promiseB value', 3000)

 Promise.all([promiseA, promiseB])
.then(value => console.log(value))
.catch(error => console.log(error));*/

//Promise.race() - returns promise that comes first 
/*
const makePromise = (text, delay) => {
   return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay)
   });
 }
 const promiseA = makePromise('promiseA value', 1000)
 const promiseB = makePromise('promiseB value', 3000)

 Promise.race([promiseA, promiseB])
 .then(value => console.log(value))
 .catch(error => console.log(error));

//Promise.any() - works like race but if all promises are rejected it returns error

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject( new Error('oops!')) , 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert);

//Promise.allSettled = Promise.all


Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject( new Error('oops!')) , 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject( new Error('Error!')), 2000))
]).catch(error => {
    console.log(error.errors[0]);
    console.log(error.errors[1]);
})


//Promise.resolve() 
new Promise (resolve => resolve('success')).then(value => console.log(value))
Promise.resolve('success').then(value => console.log(value));
*/

//Promise.reject()
new Promise (resolve, reject => reject('error')).catch(error => console.log(error));
Promise.reject('error').catch(error => console.log(error));