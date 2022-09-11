import "./style.scss";
import {useDispatch, useSelector} from "react-redux";

const UserProfile = () => {

    const userInfo = useSelector(state => state.users.info);

    const {image, name, country, city, likes} = userInfo;

    return (
        <div className="user-profile">
            <div className="user-profile__img-wrap">
                <img className="user-profile__img" src={image}></img>
            </div>
            <div className="user-profile__info">
                <p className="user-profile__name">{name}</p>
                <p className="user-profile__country">{country}, {city} </p>
                <p className="user-profile__likes">Likes: {likes}</p>
            </div>
        </div>
    )
}

export default UserProfile;