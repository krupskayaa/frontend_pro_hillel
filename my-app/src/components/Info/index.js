import './style.css';
import Photo from "./Photo";


function Info(props) {
    return (
        <div className = {props.class}>
            <Photo class = "photo"></Photo>
            <div className = "main-info">            
                <h2>Krupska Alona</h2>
                <p>I'm a Frontend Developer.</p>
            </div>
        </div>
    );
}

export default Info;