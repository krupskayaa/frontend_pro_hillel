import './style.css';
function Navigation(props) {
    const li = ["About me", "Experience", "Tools", "Social Networks", "Hobby"];
    const listItems = li.map((li) => 
    <li className = "list">
        <a className = "link" href="#">{li}</a>
    </li>);
    return (
        <nav className = {props.class}>
            <ul>
                {listItems}
            </ul>
        </nav>
    );
}

export default Navigation;