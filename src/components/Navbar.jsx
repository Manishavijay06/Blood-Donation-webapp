import heartlogo from "../assets/HeartLogo.svg";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="Logo">
          <div className="Logo-img">
            <img src={heartlogo}></img>
          </div>
          <div className="Logo-text">BloodConnect</div>
        </div>
        <div className="sign-container">
            <div className="login">Log In</div>
            <div className="signin">Sign Up</div>
        </div>
      </div>
    </>
  );
}
