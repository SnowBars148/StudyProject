//0. Сделайте функцию, которая принимает параметром номер месяца, и возвращает название этого месяца 
//(Добавить обработку варинта если такого месяца нет)
function GetMonth(num) {
    switch (num) {
        case 1:
            console.log('Январь');
            break;
        case 2:
            console.log('Февраль');
            break;
        case 3:
            console.log('Март');
            break;
        case 4:
            console.log('Апрель');
            break;
        case 5:
            console.log('Май');
            break;
        case 6:
            console.log('Июнь');
            break;
        case 7:
            console.log('Июль');
            break;
        case 8:
            console.log('Август');
            break;
        case 9:
            console.log('Сентябрь');
            break;
        case 10:
            console.log('Октябрь');
            break;
        case 11:
            console.log('Ноябрь');
            break;
        case 12:
            console.log('Декабрь');
            break;
        default:
            console.log('введите корректый месяц');
            break;
    }
}
 GetMonth(11);

 //1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
 function getDay(num) {
    switch (num) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;           
        default:
            console.log('Введите корректный день недели');
            break;
    }
 } 
 getDay(7);

//2. Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

 function firstWorlds(data) {
    let x = data.split("."); //Разбиваем на на предложения по точке
    let y = [];
    let z;
 
    for (let i=0;i < x.length-1;i++) { //x.length - количество элементов в строчке х
        if(!x[i])  //Если строка пустая, переходим к следующей итерации цикла
            continue;
        z=x[i];
        z=z.split(" "); //Разбиваем на слова по пробелу
        y.push(z[0]);       //Нулевой элемент массива z помести в конец массива y
    }
    return y.join(",");  //join - возвращает строку, элементы в которой будут разделены символом  в скобках
}
let strBig = "Первым делом утром мы встаем.Вторым делом умываемся.Третьим делаем зарядку и разминаемся.Четвертым готовим завтрак и завтракаем.Пятым начинаем одеваться и собираться.";
console.log(firstWorlds(strBig));


//3. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток 
//(Доброе утро\день\вечер\ночи Иван)
function getHello(name) {
    const hour = new Date().getHours() //показать текущий час
    let hiText = " ";

    if(hour >= 8 && hour <= 12) {
        hiText = "Доброе утро"
    }

    if(hour > 12 && hour <= 15) {
        hiText = "Добрый день"
    }

    if(hour > 15 && hour <= 22) {
        hiText = "Добрый вечер"
    }

    if(hour > 22 || hour < 8) {
        hiText = "Доброй ночи"
    }
   
    return hiText +  ", " + name;
}

console.log(getHello('Влада'));

//4. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).

function getRawWithState1 (n){
    if(n >= 0 && n <= 17) return 'ребенок'
     if(n > 17 && n <= 30) return 'молодой'
      if(n > 30 && n <= 55) return 'зрелый'
       if(n > 55) return 'старый'
    return 'Ошибка';
}
console.log(getRawWithState1(10));

//5. Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания
//console.log(new Date().getHours());


function getRawWithState2(n, name) {
    let ageType = getRawWithState1(n); 
    
    
    if(ageType === '') {
        return 'ошибка'
    }

    return name + ' имеет возраст ' + n + " и он " + ageType
}

console.log(getRawWithState2(6, 'Ivan'));


/* Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*/

const getValue = (n) => {

    if(n <=1) {
        console.log('Error');
        return;  
    }

    for (let index = 1; index <= n; index++) {
         if (index % 3 === 0 && index & 5 === 0) {
            console.log("fizzbuzz");
            continue;
            }
        if(index % 3 === 0) {
            console.log("fizz");
            continue;
        }
        if (index % 5 === 0) {
            console.log("buzz");
            continue;
        }
        console.log(index); //выводит в консоль все числа, которые не подошли под условие выше
    }
}
getValue(16)


 

 