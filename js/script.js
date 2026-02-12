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

*/

const person = {
    name: 'Matviy',
    age: 13,
    gender: 'boy',

    body(){
        console.log(`My name is ${this.name}, i'm a ${this.gender} and i've got ${this.age} years`)
    }
}

person.body()

