import "./style.scss";
import SelectOption from "../SelectOption";

const Menu = () => {
    let menu = [
        {
            title: "Account",
            url: "#",
            clName: "top-menu__nav"
        },
        {
            title: "Wishlist",
            url: "#",
            clName: "top-menu__nav"
        },{
            title: "Checkout",
            url: "#",
            clName: "top-menu__nav"
        },
        {
            title: "Log In",
            url: "#",
            clName: "top-menu__nav"
        },
        {
            title: "Sign Up",
            url: "#",
            clName: "top-menu__nav"
        },
    ]

    const listItems = menu.map((li, index) => 
        <li key={index} className = "top-menu__item">
            <a className = {li.clName} href={li.url}>{li.title}</a>
        </li>
    );

    return (
        <div className="top-menu">
            <div className="container">
                <div className="top-menu__wrapper">
                    <div className="top-menu__wrap-opt">
                        <SelectOption spanTxt="Language:" optTxt="English"/>
                        <SelectOption spanTxt="Currency:" optTxt="USD"/>
                    </div>
                    <ul className="top-menu__top-nav">
                        {listItems}
                    </ul>
                </div>
            </div>
        </div>
    );
  };
  
export default Menu;