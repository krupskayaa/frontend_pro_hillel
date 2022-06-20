class Result {
    constructor(counter, level) {
        this.counter = counter;
        this.level = level;     
        this.createResult();
        return this.gameOver;
    }

    createResult(){
        this.gameOver = document.createElement('div');
        this.gameOver.innerHTML = `Game over! <br> Your score: ${this.counter}. \n Your level: ${this.level}`;
        this.gameOver.style.cssText = `
        padding: 92px 45px 19px;
        background: rgb(142, 24, 153);
        color: #ffffff;
        height: 400px;
        width: 800px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -400px;
        text-align: center;
        font-size: 42px;
        border-radius: 16px;
        border: 2px solid rgba(255, 255, 255, 0.89);
        box-shadow: 0px 0px 30px 3px rgba(64,0,62,0.46);`;
        document.body.append(this.gameOver);
    }
}