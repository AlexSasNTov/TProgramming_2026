// Массив значений x
const xValues: number[] = [1.84, 2.71, 3.81, 4.56, 5.62];

// Цикл для обработки каждого x
for (let i = 0; i < xValues.length; i++) {
    const x = xValues[i];
    
    // Первое слагаемое: корень 4-й степени из |x^2 - 2.5|
    const term1 = Math.pow(Math.abs(x * x - 2.5), 1 / 4);
    
    // Второе слагаемое: кубический корень из log10(x^2)
    const term2 = Math.pow(Math.log10(x * x), 1 / 3);
    
    // Результат
    const result = term1 + term2;
    
    // Вывод результата с округлением до 6 знаков для удобства
    console.log(`x = ${x}, результат = ${result.toFixed(6)}`);
}
