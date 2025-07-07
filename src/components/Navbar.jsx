import heartlogo from "../assets/HeartLogo.svg";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div className="Navbar__container">
        <div className="Navbar__Logo">
          <div className="Navbar__Logo-img">
            <img src={heartlogo} onClick={() => navigate("/")} alt="Logo"></img>
          </div>
          <div className="Navbar__Logo-text" onClick={() => navigate("/")}>BloodConnect</div>
        </div>
        <div className="Navbar__sign-container">
          {currentUser ? (
            // Show user name and logout when logged in
            <div className="Navbar__user-info">
              <div className="Navbar__username">Hi, {currentUser.email?.split("@")[0]}</div>
              <div className="Navbar__logout" onClick={handleLogout}>Logout</div>
            </div>
          ) : (
            // Show login/signup when logged out
            <>
              <div className="Navbar__login" onClick={() => navigate("/login")}>Log In</div>
              <div className="Navbar__signin" onClick={() => navigate("/signup")}>Sign Up</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
