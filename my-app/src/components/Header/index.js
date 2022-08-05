import './style.css';
function Header(props) {
    return (
        <header className = {props.class}>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;