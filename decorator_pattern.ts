abstract class Car {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

class ModelX extends Car {
    public description: string = 'Model X';

    public cost(): number {
        return 50000;
    }
}

class ModelY extends Car {
    public description: string = 'Model Y';

    public cost(): number {
        return 70000;
    }
}

abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
    constructor(public decoratedCar: Car) {
        super();
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ' Enhanced Autopilot';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 2000;
    }
}

class RearFacingSeats extends CarOptions {
    constructor(public decoratedCar: Car) {
        super();
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ' Rear facing seats';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 1000;
    }
}

let myCar: Car = new ModelX();
myCar = new RearFacingSeats(myCar);
console.log(myCar.getDescription());
console.log(myCar.cost());
