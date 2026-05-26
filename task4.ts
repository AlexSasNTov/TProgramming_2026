// Массив значений x
const xValues: number[] = [1.84, 2.71, 3.81, 4.56, 5.62];

// Цикл для обработки каждого x
for (let i = 0; i < xValues.length; i++) {
    const x = xValues[i];
    
    // Первое слагаемое
    const term1 = Math.pow(Math.abs(x * x - 2.5), 1 / 4);
    
    // Второе слагаемое
    const term2 = Math.pow(Math.log10(x * x), 1 / 3);
    
    // Результат
    const result = term1 + term2;
    
    // Вывод результата с округлением
    console.log(`x = ${x}, результат = ${result.toFixed(6)}`);
}
