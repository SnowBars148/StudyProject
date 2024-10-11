// Вывести сумму чисел от 1 до N
function sum(N) {
    let result = 0;
    for (let index = 1; index <= N; index++) {
        result = result + index;
    }
    return result;
}

console.log(sum(5));

// Вывести факториал числа N
function fact(N) {
    let fact = 1;
    for (let index = 1; index <= N; index++) {
        fact = fact * index;
    }
    return fact;
}

console.log(fact(3));

// Вывести четные и нечетные числа от 1 до 100
function even() {
    for (let i = 1; i<= 100; i++)
        if (i % 2 == 0) {
            console.log('Четное ' + i);
        }
        else {
            console.log('Нечетное ' + i);
        }
    }

even();

//Вывести проверку на простое число
function simple(N) {
    let s = true;
    for (let i = 2; i < N; i++) {
        if (N % i == 0) {
            s = false;
            break;
        }
    }
    if (s) {
        console.log(N + ' ' + '- простое число')
    }
    else {
        console.log(N + ' ' + '- не является простым числом');
    }
}

simple(7);

//Вывести таблицу умножения для числа N
function multi(N) {
    for (let i = 0; i <=10; i++) {
        console.log(N + '*' + i + '=' + N * i);
    }
}

multi(5);

// Вывести сумму цифр числа N
function summa(N) {
    let s = 0;
    while (N > 0) {
        let c = N % 10;
        s = s + c;
        N = parseInt(N / 10);
    }
    console.log(s);
}

summa(234);

//Обратное число
function revD(N) {
    let revD = 0;
    while (N > 0) {
        let digit = N % 10;
        revD = revD * 10 + digit;
        N = parseInt(N / 10);
    }
    console.log(revD);
}

revD(123);

//Количество цифр в числе N
function  iter(N) {
    let i = 0;
    for (;N > 0; i++) {
        N = parseInt(N / 10);
    }
    if (i == 0) {
        console.log(1);
    }
    else {
        console.log(i);
    }
}

iter(155555);

//Проверка палиндрома для числа N

function pd(N) {
    let num = N;
    let rvr = 0;
    while (num !== 0) {
        rvr = rvr * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    if (N == rvr) {
        console.log(N + ' ' + '- число палиндром');
    }
    else {
        console.log(N + ' ' + '- число палиндром')
    }
}

pd(123454321);

//Сумма квадратов чисел от 1 до N
function square(N) {
    let s = 0;
    for (let i = 1; i <= N; i++) {
        s = s + i * i;
    }
    console.log(s);
}

square(3);
