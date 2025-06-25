import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import "../styles/HistoryDonation.css";
import heart_icon from "../assets/solar_heart-bold-duotone.svg";
import heart_icon_heart from "../assets/HeartLogo.svg";
export default function HistoryDonation(){
    return(
        <>
            <div className="Home-container">
                <Navbar></Navbar>
                <div className="CardsHolder">
                    <div className="LeftNav">
                        <SideBar></SideBar>
                    </div>
                    <div className="Right">
                        <div className="Profile-form">
                            <div className="Form-header">
                                <div className="Donor-head">History Donation</div>
                                <div className="Donor-desc">Your contribution to saving lives</div>
                            </div>
                            <div className="time-slots">
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon">
                                        <img src={heart_icon}></img>
                                    </div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">2024-02-17 at 10:00 AM</div>
                                        <div className="hospital-loc">City Hospital</div>
                                    </div>
                                </div>
                                <div className="flag-reg">Completed</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon">
                                        <img src={heart_icon}></img>
                                    </div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">2024-02-17 at 10:00 AM</div>
                                        <div className="hospital-loc">City Hospital</div>
                                    </div>
                                </div>
                                <div className="flag-reg">Completed</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon">
                                        <img src={heart_icon}></img>
                                    </div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">2024-02-17 at 10:00 AM</div>
                                        <div className="hospital-loc">City Hospital</div>
                                    </div>
                                </div>
                                <div className="flag-reg">Completed</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon">
                                        <img src={heart_icon}></img>
                                    </div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">2024-02-17 at 10:00 AM</div>
                                        <div className="hospital-loc">City Hospital</div>
                                    </div>
                                </div>
                                <div className="flag-reg">Completed</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon">
                                        <img src={heart_icon}></img>
                                    </div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">2024-02-17 at 10:00 AM</div>
                                        <div className="hospital-loc">City Hospital</div>
                                    </div>
                                </div>
                                <div className="flag-reg">Completed</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon">
                                        <img src={heart_icon}></img>
                                    </div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">2024-02-17 at 10:00 AM</div>
                                        <div className="hospital-loc">City Hospital</div>
                                    </div>
                                </div>
                                <div className="flag-reg">Completed</div>
                            </div>
                        <div className="total-donations">
                            <div className="heart-icon-center">
                                <img src={heart_icon}></img>
                            </div>
                            <div className="Data-total-donation">
                                Total Donation:3
                            </div>
                            <div className="static-text-donations">
                                You've potentially saved 9 lives
                            </div>
                        </div>
                        
                    </div>

                </div>
                    </div>
                </div>
            </div>
        </>   
    )
}