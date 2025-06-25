import profile from "../assets/iconamoon_profile-fill.svg";
import schedule from "../assets/mynaui_calendar.svg";
import history from "../assets/material-symbols_history-rounded.svg";
import eligibility from "../assets/bitcoin-icons_verify-filled.svg";
import "../styles/SideBar.css";

export default function SideBar(){
    return(
        <>
            <div className="sidebar">
                <div className="Navigation">Navigation</div>
                <div className="LeftNav-pro">
                    <div className="imgicon">
                        <img src={profile}></img>
                    </div>
                    <div className="navtext">Profile</div>
                </div>
                <div className="LeftNav-sch">
                    <div className="imgicon">
                        <img src={schedule}></img>
                    </div>
                    <div className="navtext">Schedule</div>
                </div>
                <div className="LeftNav-his">
                    <div className="imgicon">
                        <img src={history}></img>
                    </div>
                    <div className="navtext">History</div>
                </div>
                <div className="LeftNav-eli">
                    <div className="imgicon">
                        <img src={eligibility}></img>
                    </div>
                    <div className="navtext">Eligibility</div>
                </div>
            </div>
        </>
    )
}