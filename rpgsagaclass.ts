// БАЗОВЫЙ КЛАСС (родитель)

class Game_BattlerBase {
    // Свойства класса с указанием типа
    protected _hp: number;
    protected _strength: number;

    constructor() {
        this._hp = 1;           // Текущее здоровье
        this._strength = 10;    // Сила (добавлен в базовый класс)
    }

    // Геттер для силы (доступ из наследника)
    get strength(): number {
        return this._strength;
    }
}

// КЛАСС ПЕРСОНАЖА 

class Game_Actor extends Game_BattlerBase {
    // Свойства класса
    public name: string;

    constructor(name: string) {
        super();                        // Вызов конструктора родителя
        this.name = name;               // Имя воина
        this._strength = 15;            // Переопределяем силу (воин сильнее)
        this._hp = 100;                 // Переопределяем здоровье
    }

    // Метод для демонстрации
    showStats(): void {
        console.log(`Имя: ${this.name}`);
        console.log(`HP: ${this._hp}`);
        console.log(`Сила: ${this.strength}`);  // Используем геттер из родителя
    }
}

// ИСПОЛЬЗОВАНИЕ

const knight: Game_Actor = new Game_Actor("Алекс");
knight.showStats();