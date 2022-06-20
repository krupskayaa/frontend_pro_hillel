class Level {
    constructor(game) {
        this.lives = 10;
        this.level = 1;
        this.counter = 0;
        this.game = game;
        this.createDivs();
    }

    removeLife() {
        this.lives--;
        this.livesDiv.innerHTML = `Lives: ${this.lives}`;
        if(this.lives === 0) {
            this.game.gameOver();
        }
    }

    addCounter() {
        this.counter++;
        this.counterDiv.innerHTML = `Score: ${this.counter}`;
    }

    addLevel() {
        this.level++;
        this.levelDiv.innerHTML = `Level: ${this.level}`;
    }

    getLevel() {
        return this.level;
    }

    getCounter() {
        return this.counter;
    } 

    createDivs() {
        const { levelDiv, livesDiv,  counterDiv, wrapper } = new Elements(this.lives, this.level, this.counter);
        this.levelDiv = levelDiv;
        this.livesDiv = livesDiv;
        this.counterDiv = counterDiv;
        this.wrapper = wrapper;
    }
    
    displayResult() {
        this.wrapper.style.cssText = `display: none;`;
        const gameOver = new Result(this.counter, this.level);
        new BtnRestart(this.wrapper, gameOver, this.game);
    }
}