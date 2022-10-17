import "./style.scss";
import comp from "assets/comp.svg";

const Advantages = () => {
    return (
        <div className="container">
            <section className="advantages">
                    <img className="advantages__img" src={comp}/>
                    <div class="advantages__wrapper">
                        <div class="advantages__col">
                            <article class="advantages__proposal proposal-tracking">
                                <h3 class="advantages__subtitle subtitle-article">Tracking expenses</h3>
                                <p class="advantages__description">Let the app know about all your expenses and you will see clearly where your money goes.</p>
                            </article>
                        </div>
                        <div class="advantages__col">
                            <article class="advantages__proposal proposal-setting">
                                <h3 class="advantages__subtitle subtitle-article">Setting financial goals</h3>
                                <p class="advantages__description">Create your own goals and go for them. Or choose from existing goals.</p>
                            </article>
                        </div>
                        <div class="advantages__col">
                            <article class="advantages__proposal proposal-analytics">
                                <h3 class="advantages__subtitle subtitle-article">Analytics and reports</h3>
                                <p class="advantages__description">Visual reports help you better track your financial transactions.</p>
                            </article>
                        </div>                    
                    </div>
            </section>
        </div>
    )
}

export default Advantages;
