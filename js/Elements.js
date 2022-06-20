class Elements {
    constructor(lives, level, counter) {
        this.lives = lives;
        this.level = level;
        this.counter = counter;
        this.createElements();
    }

    createDiv(name, nameClass, property, text) {
        name.className = nameClass;
        name.innerHTML = `${text} ${property}`;
        name.style.cssText = `
            height: 100px;
            width: 200px;
            padding: 26px 20px 20px 20px;
            background: rgb(142, 24, 153);
            text-align: center;
            font-size: 32px;
            color: #ffffff;
            border-radius: 16px;
            border: 2px solid rgba(255, 255, 255, 0.89);
            box-shadow: 0px 0px 30px 3px rgba(64,0,62,0.46);`;
        this.wrapper.append(name);
    }

    createElements() {
        this.counterDiv = document.createElement('div');
        this.levelDiv = document.createElement('div');
        this.livesDiv = document.createElement('div');
        this.wrapper = document.createElement('div');
        document.body.append(this.wrapper);
        this.wrapper.style.cssText = `
        display: flex;
        justify-content: space-between;`;
        this.createDiv(this.counterDiv, 'counter', this.counter, 'Score: ');
        this.createDiv(this.levelDiv, 'level', this.level, 'Level: ');
        this.createDiv(this.livesDiv, 'lives', this.lives, 'Lives: ');
    }
}