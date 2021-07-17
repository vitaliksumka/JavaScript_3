function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i])
            return i;
    }
    return -1;
}

let arr = ["test", 10, 2.2, false];

console.log(find(arr, false));