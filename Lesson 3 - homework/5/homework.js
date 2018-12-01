/* 5*. Дан массив (создать такой же, с такими же значениями): */

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
   ];

let arrayOfMaxs = buildArrayOfMaxs(arr);
let idxOfMaxNumber = getMaxNumberOfArray(arrayOfMaxs)
console.log(arrayOfMaxs);

function buildArrayOfMaxs(array) {
    let arrayOfMaxs = [];
    for (nestedArray of array) {
        let sumOfCurrentArray = getSumOfArrayNumbers(nestedArray);
        arrayOfMaxs.push(sumOfCurrentArray);
    }
    return arrayOfMaxs
}

    function getSumOfArrayNumbers(array) {
        let sum = 0;
        for (num of array) {
            sum += num;
        }
        return sum;
    }

    function getMaxNumberOfArray(array) {
        let maxNumber = Math.max.apply(null, array);
        return array.indexOf(maxNumber);
    }