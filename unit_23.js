
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 11);
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

const a2 = [7, 6, 5];
function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let b2 = localStorage.getItem('a2');
    b2 = JSON.parse(b2);
    let out_3 = '';
    for (let i = 0; i < b2.length; i++) {
        out_3 += i + '&nbsp' + b2[i] + '<br>';
    }
    document.querySelector('.out-3').innerHTML = out_3;
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = {
    "hello": 'world',
    "hi": 'mahai'
};
function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a4. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
    let b4 = localStorage.getItem('a4');
    b4 = JSON.parse(b4);
    let out_5 = '';
    for (let key in b4) {
        out_5 += key + '&nbsp' + b4[key] + '<br>'
    }
    console.log(a4);
    document.querySelector('.out-5').innerHTML = out_5;
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a7 = [];
let i_7 = document.querySelector('.i-7');
function t7() {
    if (i_7.value != '') {
        a7.push(i_7.value);
    }
    localStorage.setItem('a7', JSON.stringify(a7));
    i_7.value = '';
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}

document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

let radioButton = document.querySelectorAll('input[type="radio"]');
function t9() {
    localStorage.setItem('bg', JSON.stringify(this.value));
}

for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].onchange = t9;
}


// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

let card = '';
card = {
    "apple": 3,
    "grape": 2
}
const column = ['Название товара', ' ', 'Количество'];
let out = document.querySelector('.out-10');

function t10() {
    localStorage.setItem('card', JSON.stringify(card));
    t11();
}

function t11() {
    out.innerHTML = '';
    let c = localStorage.getItem('card', JSON.stringify(card));
    c = JSON.parse(c);
    let table = document.createElement('table');
    let sumGoods = 0;
    // формирование строки назавания колонок
    let tr = document.createElement('tr');
    for (let j = 0; j < column.length; j++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = column[j];
    }
    table.appendChild(tr);
    // формирование строк таблицы вывода массива card
    for (let key in card) {
        let tr = document.createElement('tr');
        for (let k = 0; k < 4; k++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            // первая колонка таблицы - название товара
            if (k == 0) {
                td.innerHTML = key;
            }
            // вторая колонка таблицы - кнопка "+"
            if (k == 1) {
                let btnPlus = document.createElement('button');
                td.appendChild(btnPlus);
                btnPlus.innerHTML = '+';
                btnPlus.classList.add('btnPlus');
                btnPlus.setAttribute('data', [key]);
            }
            // третья колонка таблицы - количество товара
            if (k == 2) {
                td.innerHTML = card[key];
            }
            // четвертая колонка таблицы - кнопка "-"
            if (k == 3) {
                let btnMinus = document.createElement('button');
                td.appendChild(btnMinus);
                btnMinus.innerHTML = '-';
                btnMinus.classList.add('btnMinus');
                btnMinus.setAttribute('data', [key]);
            }
        }
        table.appendChild(tr);
    }
    // формирование строки footer
    let trFoot = document.createElement('tr');
    for (let j = 0; j <= 2; j++) {
        let tdFoot = document.createElement('td');
        tdFoot.classList.add('foot');
        trFoot.appendChild(tdFoot);
        if (j == 1) {
            tdFoot.innerHTML = 'Общее количество';
        }
        if (j == 2) {
            for (let key in card) {
                sumGoods += card[key];
            }
            tdFoot.innerHTML = sumGoods;
        }
        table.appendChild(trFoot);
    }
    out.appendChild(table);
    // повесим событие на все кнопки "+"
    let btnsPlus = document.querySelectorAll('.btnPlus');
    for (let i = 0; i < btnsPlus.length; i++) {
        btnsPlus[i].onclick = function () {
            let sumPlus = card[this.getAttribute('data')] + 1;
            card[this.getAttribute('data')] = sumPlus;
            console.log(card);
            t10();
        }
    }
    // повесим событие на все кнопки "-"
    let btnsMinus = document.querySelectorAll('.btnMinus');
    for (let i = 0; i < btnsMinus.length; i++) {
        btnsMinus[i].onclick = function () {
            let sumMinus = card[this.getAttribute('data')] - 1;
            if (sumMinus == -1) {
                delete card[this.getAttribute('data')];
                return t10();
            }
            else {
                card[this.getAttribute('data')] = sumMinus;
                t10();
            }
        }
    }
    if (sumGoods == 0) {
        localStorage.removeItem('card');
        table.innerHTML = 'Корзина пуста';
    }
}
document.querySelector('.b-10').onclick = t10;







// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */



// ваше событие здесь!!!

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {

}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t13() {

}

// ваше событие здесь!!!