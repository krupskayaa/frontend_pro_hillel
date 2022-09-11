import "./style.scss";
import logo from "assets/logo_header.png";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const login = useSelector(state => state.users.login);
    
    let navItems = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "News",
            url: "/news",
        },
        {
            title: "Profile",
            url: login ? "/profile" : "/login",
        },
    ];

    const createNav = navItems.map((el, index) => 
        <li key={index} className = "header__list-link">
            <Link to={el.url} className = "header__link">{el.title}</Link>
        </li>
    );

    return (
        <header className="header">
            <div className="container">
                <div className="header__menu">
                    <div className="header__menu-logo">
                        <Link className="header__menu-logo-link" to="/"><img className="catalog__image" src={logo}/></Link>
                    </div>
                    <nav className="header__menu-nav">
                        <ul className="header__menu-list">
                            {createNav}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
