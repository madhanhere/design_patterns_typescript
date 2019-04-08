interface IPhone {
    useLightning(): void;
}

interface Android {
    useMicroUSB(): void;
}


class IPhoneX implements IPhone{
    useLightning(): void {
        console.log(`using lighting port...`);
    }
}

class GooglePixel implements Android {
    useMicroUSB(): void {
        console.log(`using USB port...`);
    }
}

class LightningToMicroUSBAdapter implements Android {
    constructor(public iPhoneDevice: IPhone) {
    }

    public useMicroUSB(): void {
        console.log(`want to use Micro USB, converting to lightning `);
        this.iPhoneDevice.useLightning();
    }
}

let iPhoneX: IPhone = new IPhoneX();

let chargerAdapter: LightningToMicroUSBAdapter = new LightningToMicroUSBAdapter(iPhoneX);

chargerAdapter.useMicroUSB();


