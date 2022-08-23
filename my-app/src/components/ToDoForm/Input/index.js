import "./style.css";

function Input(props) {
    return (
        <input className={props.class} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.setInput}></input>
    );
}

export default Input;
