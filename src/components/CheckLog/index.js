import "./style.scss";
import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const CheckLog = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState(false);
    const dispatch = useDispatch();
    const actualPath = useNavigate() ;
    const error = "Incorrect username or password!";

    const info = {
        login: "Admin",
        password: "12345"
    };

    const checkInfo = () => {
        if (login === info.login && password === info.password) {
            localStorage.setItem("login", JSON.stringify(login));
            setUserInfo(false)
            dispatch({
                type: "SET_LOGIN",
                payload: login
            });
            actualPath("/profile");
            
        } else {
            setUserInfo(true);
        }
    };

    return (
        <div className="form">
            <form className="form__wrapper" onSubmit={(e) => e.preventDefault()}>
                <Input className={userInfo ? "input form__input-login error" : "input form__input-login"} type="login" placeholder="Enter your login" value={login} onChange={(e) => setLogin(e.target.value)}/>
                <Input className={userInfo ? "input form__input-password error" : "input form__input-password"}  type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button className="form__btn-check" type="submit" text="Continue" onClick={() => checkInfo()}/>
                {userInfo && 
                    (<div className='form__error-message'>
                        {error}
                    </div>)
                }
            </form>
        </div>
    )
}

export default CheckLog;