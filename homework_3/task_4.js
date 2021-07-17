function filterRange(array, a, b) {
    if (a <= array.length && b <= array.length) {
        console.log(array.splice(a, b));
    } else if (a > array.length) {
        console.log("Значення 'A' завелике!");
    } else if (b > array.length) {
        console.log("Значення 'B' завелике!");
    } else if (isNaN(a) && isNaN(b)) {
        throw console.error("Введіть число!");
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filterRange(array, 2, 3);