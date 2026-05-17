function y(x) {
    return Math.pow(Math.abs(x * x - 2.5), 1 / 4) + Math.pow(Math.log10(x * x), 1 / 3);
}

let xs = [1.84, 2.71, 3.81, 4.56, 5.62];

for (let i = 0; i < xs.length; i++) {
    console.log("При x = " + xs[i] + ", y = " + y(xs[i]));
}