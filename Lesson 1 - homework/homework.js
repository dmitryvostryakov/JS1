"use strict";

//1 - Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
//2 - Работа с переменными.
let tc = prompt("Введите температуру в градусах цельсия");
let tf = (9/5)*tc + 32;

alert(tf);

//3 Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
let admin = null;
let name = "Василий"

admin = name;

alert(admin);

//4 * Чему будет равно JS-выражение 1000 + "108";

alert(1000+"108");

// 1000108 - т.к. при складывании числа и string возвращается string (If you add a number and a string, the result will be a string!)

//5 * Самостоятельно разобраться с атрибутами тега script (async и defer)
/* If async is present: The script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing)
If async is not present and defer is present: The script is executed when the page has finished parsing
If neither async or defer is present: The script is fetched and executed immediately, before the browser continues parsing the page */

//update

//3. Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению:
console.log(10 + 10 + "10"); // 2010 т.к. при складывании числа и string возвращается string (If you add a number and a string, the result will be a string!)
console.log(10 + "10" + 10); //101010 т.к. в данном случае происходит конкат двух чисел с разных сторон
console.log(10 + 10 + +"10");// 30, т.к. в последнем случае унарный плюс преобразует стринг в число
console.log(10 / -""); // -infitity, т.к. число в итоге делится на -0 из-за унарного минуса
console.log(10 / +"2,5"); // NaN, т.к. в 2,5 используется "запятая" вместо "точки"

//4. Напишите, являются ли данные имена переменных корректными:
let mode = "normal"; // да
let my_valu3 = 102; // да
let 3my_value3 = "102"; // нет, т.к. нельзя начинать переменную с числа
let __hello__ = "world"; // да
let $$$ = "money"; // да
let !0_world = true; // нет, т.к. нельзя начинать со спецсимвола









