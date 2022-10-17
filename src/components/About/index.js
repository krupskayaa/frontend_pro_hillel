import "./style.scss";
import figure_2 from "assets/figure_2.svg";
import figure_1 from "assets/figure_1.svg";
import figure_right_1 from "assets/figure_right_1.svg";
import figure_right_2 from "assets/figure_right_2.svg";
import Button from "../Button"

const About = () => {
    return (
        <section className="about">
            <img className="about__figure figure-2" src={figure_2}/>
            <img className="about__figure figure-1" src={figure_1}/> 
            <div className="container">
                <div className="about__info">
                    <h2 className="about__title">Take Full Control Of Your Personal Finances</h2>
                    <p className="about__text">Manage and Visualize your everyday finances with features you will love to use.</p>
                    <Button className="about__btn btn-pink" type="button" text="Try For Free"/>
                </div>
            </div>
            <img className="about__figure figure-right-1" src={figure_right_1}/>
            <img className="about__figure figure-right-2" src={figure_right_2}/>
        </section>
    )
}

export default About;
