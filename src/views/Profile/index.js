import Header from "components/Header";
import Footer from "../../components/Footer";
import {useDispatch} from "react-redux";
import avatar from "assets/avatar.png";
import UserProfile from "../../components/UserProfile";
import { useEffect } from "react";

const Profile = () => {

    const dispatch = useDispatch();

    const extraInfo = {
        login: "Admin",
        password: "12345",
        name: "Alona Krupska",
        country: "Ukraine",
        city: "Dnipro",
        likes: "10000",
        image: avatar,
    }

    useEffect(()=> {
        dispatch({
            type: "USER_INFO",
            payload: extraInfo
        });
    },[]);

    return (
        <>
        <Header />
        <main>
            <div className="container">
                <UserProfile />
            </div>
        </main>
        <Footer />
        </>
    )
};

export default Profile;
