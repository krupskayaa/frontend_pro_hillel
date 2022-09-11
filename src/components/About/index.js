import "./style.scss";
import main from "assets/main_lemon.jpg";

const About = () => {
    return (
        <div className="container">
            <section className="about">
                <div className="about__image">
                    <img className="catalog__image" src={main}/>
                </div>
                <div className="about__info">
                    <p className="about__txt-title">Trending</p>
                    <h2 className="about__title">Cake meme reflects coronavirus absurdity in a world where nothing is what it seems</h2>
                    <p className="about__description">Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”</p>
                    <div className="about__author-info">
                        <p className="about__time">2 hours ago</p>
                        <p className="about__author">By Lucy Hiddleston</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
