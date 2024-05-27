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
            
        </>
    );
}

export default AddPrisonersComponent;