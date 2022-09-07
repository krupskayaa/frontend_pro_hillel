import "./style.scss";

const FooterBottom = () => {
    let menu = [
        {
            title: "About us",
            url: "#",
            clName: "footer-bottom__nav"
        },
        {
            title: "Delivery & Returns",
            url: "#",
            clName: "footer-bottom__nav"
        },{
            title: "Terms & Conditions",
            url: "#",
            clName: "footer-bottom__nav"
        },
        {
            title: "Contact Us",
            url: "#",
            clName: "footer-bottom__nav"
        },
    ]

    const listItems = menu.map((li, index) => 
        <li key={index} className = "top-menu__item">
            <a className = {li.clName} href={li.url}>{li.title}</a>
        </li>
    );

    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-bottom__wrapper">
                    <p className="footer-bottom__author">© Copyright 2013 Css Author, All Rights Reserved.</p>
                    <ul className="top-menu__top-nav">
                        {listItems}
                    </ul>
                </div>
            </div>
        </div>
    );
  };
  
export default FooterBottom;