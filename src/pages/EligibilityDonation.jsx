import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import "../styles/EligibilityDonation.css";
import heart_icon from "../assets/HeartLogo.svg";

export default function EligibilityDonation(){
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
                                    </div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">Age(18-65 years)</div>
                                        <div className="hospital-loc">You meet the age requirement</div>
                                    </div>
                                </div>
                                <div className="flag-reg">pending</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon"></div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">{'Weight(>50kg)'}</div>
                                        <div className="hospital-loc">You meet the weight requirement</div>
                                    </div>
                                </div>
                                <div className="flag-reg">pending</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon"></div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">{'Last Donation(>56 days ago)'}</div>
                                        <div className="hospital-loc">Sufficient time has passed since last donation</div>
                                    </div>
                                </div>
                                <div className="flag-reg">pending</div>
                            </div>
                            <div className="time-up-div">
                                <div className="group-cal-details">
                                    <div className="cal-icon"></div>
                                    <div className="info-up-div">
                                        <div className="date-time-upd">General Health</div>
                                        <div className="hospital-loc">Please complete health questionnaire</div>
                                    </div>
                                </div>
                                <div className="flag-reg">pending</div>
                            </div>
                        </div>
                        <div class="last">
                            <button class="savebtn">Complete Health Questionnaire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}