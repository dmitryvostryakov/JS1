/* 4*. (Это не обязательное задание, делайте только если хотите.) С помощью цикла while вывести все
простые числа в промежутке от 0 до 100 (можно без оптимизаций).*/

let i = 0;
while (i < 100) {
    if (i > 2 && i <= Math.sqrt(i)) {
        console.log(i);
    }
    i++;
}

// не вышло :(