import "./style.scss"
import mainImage from "../../assets/main_image.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
    const sliderContain = [
        {
            img: mainImage,
            txt1: "aluminum club",
            txt2: "experience ray-ban"
        }
    ];
    return (
        <section className="description">
                <button className="description__slider-arrow slider-arrow-prev" type="button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="description__slider-items">
                    <ul className="description__slider-list">
                        {sliderContain.map((info, i) => {
                            return (
                                <li key={i} className="description__slider-item" 
                                style={{
                                    backgroundImage: `url(${info.img})`,
                                    height: '475px',
                                    backgroundPosition: 'top center',
                                    backgroundSize: 'cover',
                                }}> 
                                    <div className="description__wrapper container">
                                        <div className="description__wrap-text">
                                            <p className="description__txt1">{info.txt1}</p>
                                        </div>
                                        <div className="description__wrap-text">
                                            <p className="description__txt2">{info.txt2}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button className="description__slider-arrow slider-arrow-next" type="button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
        </section>
    );
}

export default Description;