import heartlogo from "../assets/HeartLogo.svg";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate=useNavigate();
  return (
    <>
      <div className="Navbar__container">
        <div className="Navbar__Logo">
          <div className="Navbar__Logo-img">
            <img src={heartlogo}></img>
          </div>
          <div className="Navbar__Logo-text">BloodConnect</div>
        </div>
        <div className="Navbar__sign-container">
            <div className="Navbar__login"  onClick={()=>navigate("/login")}>Log In</div>
            <div className="Navbar__signin" onClick={()=>navigate("/signup")}>Sign Up</div>
        </div>
      </div>
    </>
  );
}
