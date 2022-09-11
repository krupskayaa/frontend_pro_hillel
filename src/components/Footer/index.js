import "./style.scss";
import logo_footer from "assets/logo_footer.png";
import {Link} from "react-router-dom";
import facebook from 'assets/facebook.svg';
import instagram from 'assets/instagram.svg';
import linkedin from 'assets/linkedin.svg';
import youtube from 'assets/youtube.svg';

const Footer = () => {
    const socialMedia = [facebook, instagram, linkedin, youtube];

    let menu = [
        {
            title: "Privacy Policy",
            url: "#",
            clName: "footer__item-link"
        },
        {
            title: "Do not sell my personal info",
            url: "#",
            clName: "footer__item-link"
        },{
            title: "Terms of Service",
            url: "#",
            clName: "footer__item-link"
        },
        {
            title: "nbcnews.com Site Map",
            url: "#",
            clName: "footer__item-link"
        },
    ];

    const listItems = menu.map((li, index) => 
        <li key={index} className = "top-menu__item">
            <a className = {li.clName} href={li.url}>{li.title}</a>
        </li>
    );

    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__left">
                        <Link className="header__logo-link" to="/"><img className="logo__image" src={logo_footer}/></Link>
                        <p className="footer__author">© copyright 2022 | nbc news</p>
                    </div>
                    <ul className="footer__nav">
                        {listItems}
                    </ul>
                    <div className="footer__social-networks">
                        {socialMedia.map((icon, i) => <a key={i} className="footer__social-networks-link" href="#">
                        <img className="footer__social-networks-icon" src={icon}/>
                        </a>)} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;