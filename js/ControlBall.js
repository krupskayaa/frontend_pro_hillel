class ControlBall {
    constructor(level) {
        this.level = level;
        this.size = 100 / Number(`1.${this.level.getLevel()}`);
        this.speed = 5 * this.level.getLevel();
        this.interval = 50;
    }

    init(){
        this.createBall();
        this.move()
    }

    createBall() {
        this.ball = new Ball(this.size, this.createX())
        this.ball.addEventListener('click', () => {
            this.level.addCounter();
            if(this.level.getCounter() % 10 === 0) {
                this.level.addLevel();
            }
            clearInterval(this.moveInterval);
            this.destroy();
        })
    }

    createX() {
        return Math.ceil(Math.random() * (window.innerWidth - this.size));
    }

    destroy() {
        this.ball.remove();
        clearInterval(this.moveInterval);
        delete this;
    }

    move() {
        let y = 0;
        this.moveInterval = setInterval(() => {
            y += this.speed;
            this.ball.style.top = `${y}px`;
            if(y > window.innerHeight - this.size){
                this.level.removeLife();
                this.destroy();
            }
        }, this.interval)
    }
}