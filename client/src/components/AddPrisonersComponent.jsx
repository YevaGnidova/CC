import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./AddPrisonersComponent.css"

function AddPrisonersComponent() {
    const navigate = useNavigate();
    
    useEffect(() => {
        let user = localStorage.getItem("user");
        if (user) {
          try {
            user = JSON.parse(user);
            if (user.isAuth) return;
            else navigate("/");
          } catch (err) {
            console.log(err);
          }
        }
      }, []);

    return (
        <>
            <form>
                <div>
                    <label>IMIĘ</label>
                    <input />
                </div>
                <div>
                    <label>NAZWISKO</label>
                    <input />
                </div>
                <div>
                    <label>PESEL</label>
                    <input />
                </div>
                <div>
                    <div>
                        <label>PRZYCZYNA</label>
                        <input />
                    </div>
                    <div>
                        <label>WYJAŚNIENIE</label>
                        <textarea></textarea>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddPrisonersComponent;