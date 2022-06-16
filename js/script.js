const transport = {
    type: '',
    brand: '',
    drive: function () {
        if(this.engine == true && this.wheels >= 1) {
            console.log(`I am a ${this.type}, I can drive`);
        } else {
            console.log(`I am a ${this.type}, I don't have details to drive`);
        }
    },
    seats: '',
    weight: '',
    wheels: '',
    engine: '',
    wheelsSize: '',
}

const bike = {
    type: 'bike',
    brand: 'salute',
    seats: 1,
    weight: 40,
    wheels: 2,
    engine: true,
    __proto__: transport,
}

const bikeMountains = {
    type: 'mountain bike',
    seats: 1,
    shockAbsorber: true,
    abilityСlimbMountains: function () {
        return `I am a ${this.type}, I can ride mountains`;
    },
    __proto__: bike,
}

const bikeRoad = {
    type: 'road bike',
    seats: 1,
    abilityDriveRoads: function () {
        return `I am a ${this.type}, I can drive fast on good roads`;
    },
    __proto__: bike,
}

const motorbike = {
    type: 'motorbike',
    brand: 'yava',
    seats: 2,
    weight: 150,
    wheels: 2,
    engine: true,
    trunk: true,
    __proto__: transport,
}

const motorbikeSport = {
    type: 'sport motorbike',
    weight: 300,
    engineSize: 200,
    makeHighSpeed: function () {
        return `I am a ${this.type}, I can drive at high speed`;
    },
    __proto__: motorbike,
}

const motorbikeTurist = {
    type: 'turist motorbike',
    weight: 250,
    engineSize: 150,
    seat: 1,
    thermalControl: true,
    longDistanceAbility: function () {
        return `I am a ${this.type}, I can take a long trip`;
    },
    __proto__: motorbike,
}

const scooter = {
    type: 'scooter',
    brand: 'salut',
    seats: 1,
    weight: 25,
    wheels: 2,
    engine: true,
    __proto__: transport,
}

const scooterCity = {
    type: 'city scooter',
    weight: 20,
    wheelsSize: 230,
    moveAroundCity: function () {
        return `I am a ${this.type}, I can drive around city`;
    },
    __proto__: scooter,
}

const scooterThreeWheels = {
    type: 'three wheels scooter',
    seats: 2,
    weight: 35,
    wheels: 3,
    brake: true,
    moveSafe: function () {
        return `I am a ${this.type}, I am very stable, because I have 3 wheels`;
    },
    __proto__: scooter,
}
