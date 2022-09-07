import "./style.scss"

const Input = (props) => {
    return (
        <input className={props.className} type={props.type} placeholder={props.placeholder}></input>
    );
}

export default Input;