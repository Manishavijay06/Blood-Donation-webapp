import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import "../styles/EligibilityDonation.css";
import heart_icon from "../assets/HeartLogo.svg";

export default function EligibilityDonation(){
    return(
        <>
        <div className="EligibilityDonation__Home-container">
            <Navbar></Navbar>
            <div className="EligibilityDonation__CardsHolder">
                <div className="EligibilityDonation__LeftNav">
                    <SideBar></SideBar>
                </div>
                <div className="EligibilityDonation__Right">
                    <div className="EligibilityDonation__Profile-form">
                        <div className="EligibilityDonation__Form-header">
                            <div className="EligibilityDonation__Donor-head">History Donation</div>
                            <div className="EligibilityDonation__Donor-desc">Your contribution to saving lives</div>
                        </div>
                        <div className="EligibilityDonation__time-slots">
                            <div className="EligibilityDonation__time-up-div">
                                <div className="EligibilityDonation__group-cal-details">
                                    <div className="EligibilityDonation__cal-icon">
                                    </div>
                                    <div className="EligibilityDonation__info-up-div">
                                        <div className="EligibilityDonation__date-time-upd">Age(18-65 years)</div>
                                        <div className="EligibilityDonation__hospital-loc">You meet the age requirement</div>
                                    </div>
                                </div>
                                <div className="EligibilityDonation__flag-reg">pending</div>
                            </div>
                            <div className="EligibilityDonation__time-up-div">
                                <div className="EligibilityDonation__group-cal-details">
                                    <div className="EligibilityDonation__cal-icon"></div>
                                    <div className="EligibilityDonation__info-up-div">
                                        <div className="EligibilityDonation__date-time-upd">{'Weight(>50kg)'}</div>
                                        <div className="EligibilityDonation__hospital-loc">You meet the weight requirement</div>
                                    </div>
                                </div>
                                <div className="EligibilityDonation__flag-reg">pending</div>
                            </div>
                            <div className="EligibilityDonation__time-up-div">
                                <div className="EligibilityDonation__group-cal-details">
                                    <div className="EligibilityDonation__cal-icon"></div>
                                    <div className="EligibilityDonation__info-up-div">
                                        <div className="EligibilityDonation__date-time-upd">{'Last Donation(>56 days ago)'}</div>
                                        <div className="EligibilityDonation__hospital-loc">Sufficient time has passed since last donation</div>
                                    </div>
                                </div>
                                <div className="EligibilityDonation__flag-reg">pending</div>
                            </div>
                            <div className="EligibilityDonation__time-up-div">
                                <div className="EligibilityDonation__group-cal-details">
                                    <div className="EligibilityDonation__cal-icon"></div>
                                    <div className="EligibilityDonation__info-up-div">
                                        <div className="EligibilityDonation__date-time-upd">General Health</div>
                                        <div className="EligibilityDonation__hospital-loc">Please complete health questionnaire</div>
                                    </div>
                                </div>
                                <div className="EligibilityDonation__flag-reg">pending</div>
                            </div>
                        </div>
                        <div className="EligibilityDonation__last">
                            <button className="EligibilityDonation__savebtn">Complete Health Questionnaire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}