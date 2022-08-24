import "./style.css";

function Button(props) {
    return (
        <button className={props.class} type={props.type}>{props.text}</button>
    );
}

export default Button;