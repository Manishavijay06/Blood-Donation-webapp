import heartlogo from "../assets/HeartLogo.svg";
import "../styles/Navbar.css";
export default function Navbar() {
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
            <div className="Navbar__login">Log In</div>
            <div className="Navbar__signin">Sign Up</div>
        </div>
      </div>
    </>
  );
}
