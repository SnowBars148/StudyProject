// Вывести сумму чисел от 1 до N
let n = 15;
let result = 0;
for (let index = 1; index <= n; index++) {
    result = result + index;
}
console.log(result);

// Вывести факториал числа N
let f = 3;
let fact = 1;
for (let index = 1; index <= f; index++) {
    fact = fact * index;
}
console.log(fact);

// Вывести четные и нечетные числа от 1 до 100
for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        console.log('Четное ' + index);
    }
    else {
        console.log('Нечетное ' + index);
    }
}

//Вывести проверку на простое число

//Вывести таблицу умножения для числа N
let a = 2;
for (let index = 0; index <= 10; index++) {
    console.log(a + '*' + index + '=' + a * index); 
}

//Вывести сумму цифр числа N
let b = 339;
let sum = 0;
while (b > 0) {
    let c = b % 10;
    sum = sum + c;
    b = parseInt(b / 10);
}
console.log(sum);

//Обратное число
let d = 1234;
let revD = 0;
while (d > 0) {
    let digit = d % 10;
    revD = revD * 10 + digit;
    d = parseInt(d / 10);
}
console.log(revD);

//Количество цифр в числе N
let e = 15365;
let iter = 0;
for (;e > 0; iter++) {
    e = parseInt(e / 10);   
}
if (iter == 0) {
    console.log (1); 
}   
else {
    console.log(iter);
}

//Проверка палиндрома для числа N

//Сумма квадратов чисел от 1 до N
let g = 3;
let square = 0;
for (let index = 1; index <= g; index++) {
    square = square + index * index;
}
console.log(square);