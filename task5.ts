class Car {
  constructor(
    private brand: string,
    private model: string,
    private speed: number,
  ) {}

  static create(
    brand: string,
    model: string,
    speed: number
  ): Car {
    return new Car(brand, model, speed);
  }

  info(): string {
    return `Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.speed}`;
  }
}

const car= Car.create("Toyota", "Camry", 67);

console.log(car.info());
