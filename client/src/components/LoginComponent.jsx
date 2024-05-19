import { useState } from "react"
import "./LoginComponent.css"

function LoginComponent() {
    const [dir_name, setName] = useState("");
    const [dir_password, setPassword] = useState("");

    function passwordVrify() {
        
    }

    return (
        <div className="container">
            <form>
                <h2 className="login">LOGIN</h2>
                <div className="inputblock">
                    <label>NAME OR EMAIL ACCOUNT:</label>
                    <input onChange={event => setName(event.target.value)} value={dir_name}/>
                </div>
                <div className="inputblock">    
                    <label>PASSWORD:</label>
                    <input onChange={event => setPassword(event.target.value)} value={dir_password}/>
                </div>
                <div>
                    <input className="signin" type="button" value="SIGN IN" />
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;