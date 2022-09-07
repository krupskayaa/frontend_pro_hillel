import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterTop = () => {
    const info = [
        {
            img: (
                <FontAwesomeIcon
                    icon={faTruck}
                    style={{width: "34px", height: "28px"}}
                />
            ),
            text: "free shiping on orders over 100$",
            class: "footer-top__item delivery",
        },
    
        {
            img: (
                <FontAwesomeIcon
                    icon={faPhone}
                    style={{width: "28px", height: "28px"}}
                />
            ),
            text: "call us! tell free 409-8888-0099",
            class: "footer-top__item phone",
        },
      ];
    return (
        <div className="footer-top">
            <div className="container">
                <div className="footer-top__wrap">
                    {info.map((elem, i) => {
                        return (
                            <div key={i} className={elem.class}>
                                <div className="footer-top__icon">{elem.img}</div>
                                <p className="footer-top__item-txt">{elem.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FooterTop;