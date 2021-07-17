function camelize(str) {
    if (str != '') {
        method1 = str.split('-');
        method2 = method1.join("");
        console.log(method2);
    } else {
        console.log("Стрічка пуста!");
    }
}

str = 'My-Short-String';
console.log("Стрічка до функції: " + str);

console.log("Стрічка після функції:");
camelize(str);
