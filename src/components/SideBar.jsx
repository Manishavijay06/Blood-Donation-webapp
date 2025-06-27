import profile from "../assets/iconamoon_profile-fill.svg";
import schedule from "../assets/mynaui_calendar.svg";
import history from "../assets/material-symbols_history-rounded.svg";
import eligibility from "../assets/bitcoin-icons_verify-filled.svg";
import "../styles/SideBar.css";

export default function SideBar(){
    return(
        <>
            <div className="SideBar__container">
                <div className="SideBar__Navigation">Navigation</div>
                <div className="SideBar__nav-item SideBar__nav-item--active">
                    <div className="SideBar__icon">
                        <img src={profile}></img>
                    </div>
                    <div className="SideBar__text">Profile</div>
                </div>
                <div className="SideBar__nav-item">
                    <div className="SideBar__icon">
                        <img src={schedule}></img>
                    </div>
                    <div className="SideBar__text">Schedule</div>
                </div>
                <div className="SideBar__nav-item">
                    <div className="SideBar__icon">
                        <img src={history}></img>
                    </div>
                    <div className="SideBar__text">History</div>
                </div>
                <div className="SideBar__nav-item">
                    <div className="SideBar__icon">
                        <img src={eligibility}></img>
                    </div>
                    <div className="SideBar__text">Eligibility</div>
                </div>
            </div>
        </>
    )
}