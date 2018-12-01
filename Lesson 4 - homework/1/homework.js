/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве firstDigit)
- десятки (в свойстве secondDigit)
- сотни (в свойстве thirdDigit)
Например, для числа 45 мы должны получить следующий объект:
{
 firstDigit: 5,
 secondDigit: 4,
 thirdDigit: 0,
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

let i = Number(prompt("Введите число"));

if (!Number.isInteger(i) || i < 0 || i > 999) {
    console.log('Значение аргумента должно быть целым числом в диапазоне [0 .. 999].');}

    else {
    let digits = {
    firstDigit : i % 10,
    secondDigit : Math.floor(i / 10) % 10,
    thirdDigit : Math.floor(i / 100),
    returnDigits : function() {
        return alert(`Единиц:${digits.firstDigit} Десятков:${digits.secondDigit} Сотен:${digits.thirdDigit}`);
    }
}

digits.returnDigits()}