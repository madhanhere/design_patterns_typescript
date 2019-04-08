interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObserver();
}

interface Observer {
    update(temperature: number);
}

class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature(tmp: number): void {
        this.temperature = tmp;
        console.log(`new temperature: ${this.temperature}`);
        this.notifyObserver();
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObserver(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

class TemperatureDisplay implements Observer {
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature: number): void {
        console.log(`weather changes now to ${temperature}`);
    }
}

class Fan implements Observer {
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature: number): void {
        if (temperature > 25) {
            console.log('Turn On the fan');
        } else {
            console.log('Turn off the fan now');
        }
    }
}

let weatherStation: WeatherStation = new WeatherStation();
let tempDisplay: TemperatureDisplay = new TemperatureDisplay(weatherStation);
let fan: Fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
