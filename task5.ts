// Структура Автомобиль 
type Car = {
    // 3 переменных
    brand: string;      // Марка автомобиля
    model: string;      // Модель автомобиля
    speed: number;      // Текущая скорость (км/ч)
}

// Метод-конструктор, возвращающий структуру
function createCar(brand: string, model: string): Car {
    return {
        brand: brand,
        model: model,
        speed: 0
    };
}

// Метод 1: Получить скорость
function getSpeed(car: Car): number {
    return car.speed;
}

// Метод 2: Установить скорость
function setSpeed(car: Car, newSpeed: number): void {
    if (newSpeed < 0) {
        console.log("Ошибка: скорость не может быть отрицательной!");
        return;
    }

    if (newSpeed > 250) {
        console.log("Ошибка: скорость не может превышать 250 км/ч!");
        return;
    }

    car.speed = newSpeed;
    console.log(`Скорость установлена на ${car.speed} км/ч`);
}

// Метод 3: Увеличить скорость (разгон)
function accelerate(car: Car, increment: number): void {
    const newSpeed = car.speed + increment;
    console.log(`Разгон на ${increment} км/ч...`);
    setSpeed(car, newSpeed);
}

// ================= ПРИМЕР ИСПОЛЬЗОВАНИЯ =================

console.log("АВТОМОБИЛЬ");

const myCar = createCar("Toyota", "Camry");

console.log(`Автомобиль: ${myCar.brand} ${myCar.model}`);

console.log(`Текущая скорость: ${getSpeed(myCar)} км/ч`);

console.log("Установка скорости");
setSpeed(myCar, 60);
console.log(`Текущая скорость: ${getSpeed(myCar)} км/ч`);

console.log("Разгон");
accelerate(myCar, 40);
console.log(`Текущая скорость: ${getSpeed(myCar)} км/ч`);

console.log("Проверка ошибок");
setSpeed(myCar, -20);
setSpeed(myCar, 300);