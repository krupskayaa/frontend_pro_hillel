class Game {
    constructor() {
        this.interval = 1000;
    }

    start(){
        this.level = new Level(this);
        this.balls = [];
        this.intervalStart = setInterval(() => {
            let ball = new ControlBall(this.level);
            ball.init();
            this.balls.push(ball)
        }, this.interval)
    }

    gameOver(){
        this.level.displayResult();
        this.balls.forEach(el => el.destroy());
        clearInterval(this.intervalStart);
    }
}