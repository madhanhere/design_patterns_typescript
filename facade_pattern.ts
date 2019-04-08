class BlurayPlayer {
    on(): void {
        console.log(`blueray player turning on...`);
    }

    turnOff(): void {
        console.log(`blueray player turning off...`);
    }

    play(): void {
        console.log(`playing blueray disc...`);
    }
}

class Amplifier {
    on(): void {
        console.log(`amplifier turning on...`);
    }

    turnOff(): void {
        console.log(`amplifier turning off...`);
    }

    setSource(source: string): void {
        console.log(`setting source to: ${source}`);
    }

    setVolume(volume: number): void {
        console.log(`setting volume to: ${volume}`);
    }
}

class Lights {
    dim(): void {
        console.log(`lights are dimming...`);
    }
}

class TV {
    turnOn(): void {
        console.log(`turn on the TV...`);
    }

    turnOff(): void {
        console.log(`turn off the TV...`);
    }
}

class PopCornMaker {
    on(): void {
        console.log(`turning on popcorn maker...`);
    }

    turnOff(): void {
        console.log(`turning off popcorn maker...`);
    }

    pop(): void {
        console.log(`poping corn...`);
    }
}

class HomeTheatreFacade {
    constructor(private blueray: BlurayPlayer,
        private amp: Amplifier,
        private lights: Lights,
        private tv: TV,
        private popCornMaker: PopCornMaker
    ) {}

    public watchMovie(): void {
        this.popCornMaker.on();
        this.popCornMaker.pop();

        this.lights.dim();

        this.tv.turnOn();

        this.amp.on();
        this.amp.setSource('blueray');
        this.amp.setVolume(13);

        this.blueray.on();
        this.blueray.play();
    }

    public endMovie(): void {
        this.popCornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.blueray.turnOff();
    }
}

let blueray: BlurayPlayer = new BlurayPlayer();
let amp: Amplifier = new Amplifier();
let tv: TV = new TV();
let lights: Lights = new Lights();
let popCornMaker: PopCornMaker = new PopCornMaker();

let homeTheatre: HomeTheatreFacade = new HomeTheatreFacade(blueray, amp, lights, tv, popCornMaker);

homeTheatre.watchMovie();

homeTheatre.endMovie();
