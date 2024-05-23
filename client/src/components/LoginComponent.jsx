import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css"

export let active = false;

function LoginComponent() {
    const [dir_name, setName] = useState("");
    const [dir_password, setPassword] = useState("");
    const navigate = useNavigate();

    function passwordVrify(event) {
        if (dir_name != "director" || dir_password != "code999") return;
        active = true;
        localStorage.setItem("user", JSON.stringify({ user: dir_name, isAuth: true }))
        navigate("/prisoners");
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify({ user: dir_name, isAuth: false }))
    })

    return (
        <div className="container">
            <form>
                <h2 className="login">LOGOWANIE</h2>
                <div className="inputblock">
                    <label>IMIĘ LUB MAIL KONTO:</label>
                    <input onChange={event => setName(event.target.value)} value={dir_name} />
                </div>
                <div className="inputblock">
                    <label>HASŁO:</label>
                    <input onChange={event => setPassword(event.target.value)} value={dir_password} />
                </div>
                <div>
                    <input onClick={passwordVrify} className="signin" type="button" value="ZALOGUJ" />
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;