import "./style.css";

function TitleMain(props) {
    return (
        <h1 className={props.class}>{props.title}</h1>
    );
}

export default TitleMain;