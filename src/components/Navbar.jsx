import "../styles/Navbar.css";
import hearticon from "../assets/heart-circle-icon.svg";
export default function () {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div id="logoimg">
            <div id="cir">
              <img src={hearticon}></img>
            </div>
          </div>
          <div className="logoname">BloodConnect</div>
        </div>
        <div className="moto">Save Lives.Donate Blood</div>
      </div>
    </>
  );
}
