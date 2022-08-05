import './style.css';
import Photo from "./Photo";


function Info(props) {
    return (
        <div className = {props.class}>
            <Photo class = "photo"></Photo>
        </div>
    );
}

export default Info;