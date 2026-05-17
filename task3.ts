function y(x) {
    return Math.pow(Math.abs(x * x - 2.5), 1 / 4) + Math.pow(Math.log10(x * x), 1 / 3)
}

console.log("При x = 1.84, y = " + y(1.84));
console.log("При x = 2.71, y = " + y(2.71));
console.log("При x = 3.81, y = " + y(3.81));
console.log("При x = 4.56, y = " + y(4.56));
console.log("При x = 5.62, y = " + y(5.62));