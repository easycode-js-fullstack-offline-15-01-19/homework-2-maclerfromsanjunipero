// -------------------------- Home work 2 --------------------------
// -------------------------- Василенко Максим Александрович --------------------------

// Преобразование примитивов. Задачи.

// Чему равно а, почему ?
// && - запинаеться на лжи (false)
// || - запинаеться на правде(true)

// let a = 0 || 'string'; // будет строка стринг, так как любая не пустая строка это тру
// let a = 1 && 'string'; // будет строка стринг, оба тру, возращаеться последний операнд
// let a = null || 25; // НУЛЛ преобразовываеться к 0, 0 это ФОЛС, поэтому вернеться 25
// let a = null && 25; // вернеться НУЛЛ, так как он ФОЛС, И заппнаеться на нем
// let a = null || 0 || 35; // вернеться 35, так как он единственные тру
// let a = null && 0 && 35; // вернеться НУЛЛ, так как он ФОЛС, И заппнаеться на нем

//Что отобразится в консоли. Почему?

// 12 + 14 + '12' = 2612 (первый плюс арифметический, а при втором происходит конкатинация)
// 3 + 2 - '1' = 4 (при минусе происходит преобрахование строки к числу)
// '3' + 2 - 1 = 31 (сначала конкатинация, а затем преобразование к числу)
// true + 2 = 3 (true приобразовываеться к числу 1)
// + '10' + 1 = 11 (унарный плюс преобразовувает 10 к числу)
// undefined + 2 = NaN (любая арифметика с undefined дает NaN)
// null + 5 = 5 (null приобразовуеться к 0)
// true + undefined = NaN (любая арифметика с undefined дает NaN)

// If else. Задачи.

// Задача 1 ----------------------------------------

let value = 'hidden';

if (value === 'hidden') {
    value = 'visible';
} else {
    value = 'hidden';
}

// Задача 2 ----------------------------------------

let a = 0;

if (a === 0) {
    a = 1;
} else if (a < 0) {
    a = 'less then zero';
} else {
    a *= 10;
}

// Задача 3 ----------------------------------------

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

let carYearsOld = 2019 - car.create;

if (carYearsOld > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

// Задача 4 ----------------------------------------

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};

if (item.discount) {
    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(item.discount) / 100);
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}

// Задача 5

let min = 10; // минимальная цена
let max = 20; // максимальная цена

let product = {
    name: 'Яблоко',
    price: '10$'
};

let price = parseInt(product.price);

if (price >= min && price <= max) {
    console.log(product.name);
} else {
    console.log('Товаров не найдено');
}

// Тернарный оператор. Switch case. Задачи.

// Задача 1 ----------------------------------------


switch (a) {
    case `block`:
        console.log(`Block`);
        break;

    case `none`:
        console.log(`none`);
        break;

    case `inline`:
        console.log(`inline`);
        break;

    default:
        console.log(`Other`);
        break;
}

// Задача 2.1 ----------------------------------------x

a = (a === 'hidden') ? 'visible' : 'hidden' ;


// Задача 2.2 ----------------------------------------x

a = (a === 0) ? 1 : a < 0 ? 'less then zero' : a*=10;

//// Задача 2.3 ----------------------------------------x

let cars = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

let carsYearsOld = 2019 - car.create;

carsYearsOld > 5 ? (console.log('Need repair'), cars.needRepair = true) : cars.needRepair = false;