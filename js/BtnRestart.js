class BtnRestart {
    constructor(wrapper, gameOver, game) {
        this.wrapper = wrapper;
        this.gameOver = gameOver;
        this.game = game;
        this.createBtnRestart();
        return this.btnRestart;
    }
    
    createBtnRestart() {
        this.btnRestart = document.createElement('button');
        this.btnRestart.innerHTML = 'Restart';
        this.btnRestart.style.cssText = `
        padding: 18px 55px;
        text-transform: uppercase;
        color: #60006d;
        border: 1px solid rgb(76, 27, 102, 0.89);
        background: #ffffff;
        font-size: 32px;
        border-radius: 12px;
        margin-top: 30px;
        cursor: pointer;
        box-shadow: 10px 10px 10px 10px rgba(72, 6, 75, 0.1);`;
        this.btnRestart.addEventListener('click', () => {
            this.gameOver.style.cssText = `display: none;`;
            this.wrapper.style.cssText = `
            display: flex;
            justify-content: space-between;`;
            const elements = document.querySelectorAll('div');
            elements.forEach(el => el.remove());
            this.game.start();
            delete this;
        });
        this.gameOver.append(this.btnRestart);
    }
}
