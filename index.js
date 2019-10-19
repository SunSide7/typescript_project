function logInfo(name, age) {
    console.log("Info: " + name + ", " + age);
}
logInfo('Alex', 35);
function calc(a, b) {
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
console.log(calc(2, 'f'));
