import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import TopMenu from "./TopMenu";
import Input from "../Input";
import { useContext } from "react";
import { ContextBasketCounter } from "store/context";

const Header = () => {
    const {basketCount, setBasketCount} = useContext(ContextBasketCounter);

    let navItems = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Catalog",
            url: "/catalog",
        },{
            title: "Men",
            url: "/men",
        },
        {
            title: "Other",
            url: "/other",
        },
        {
            title: "Purchase",
            url: "/purchase",
        },
    ]

    const createNav = navItems.map((el, index) => 
        <li key={index} className = "middle-menu__item">
            <Link to={el.url} className = "middle-menu__nav">{el.title}</Link>
        </li>
    );
    return (
        <header>
            <TopMenu />
            <div className="container">
                <div className="middle-menu">
                    <div className="middle-menu__logo">
                        <Link className="middle-menu__logo-link" to="/">leo shop</Link>
                    </div>
                    <nav className="middle-menu__nav">
                        <ul className="middle-menu__list">
                            {createNav}
                        </ul>
                    </nav>
                    <div className="middle-menu__right">
                        <div className="middle-menu__wrap-input">
                            <Input className="input middle-menu__input" type="text" placeholder="Search.." />
                            <FontAwesomeIcon className="middle-menu__input-icon" icon={faMagnifyingGlass} />
                        </div>
                        <div className="middle-menu__wrap-buy">
                            <Link className="middle-menu__items" to='/basket'><FontAwesomeIcon icon={faCartShopping} /></Link>
                            <Link className="middle-menu__counter" to='/basket'> cart ({basketCount})</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
