import React from "react";
import profile from "../assets/iconamoon_profile-fill.svg";
import schedule from "../assets/mynaui_calendar.svg";
import history from "../assets/material-symbols_history-rounded.svg";
import eligibility from "../assets/bitcoin-icons_verify-filled.svg";
import "../styles/SideBar.css";

export default function SideBar({ onFormChange }) {
  return (
    <div className="SideBar__container">
      <div className="SideBar__Navigation">Navigation</div>
      <div className="SideBar__nav-item" onClick={() => onFormChange(1)}>
        <div className="SideBar__icon">
          <img src={profile} alt="Profile" />
        </div>
        <div className="SideBar__text">Profile</div>
      </div>
      <div className="SideBar__nav-item" onClick={() => onFormChange(2)}>
        <div className="SideBar__icon">
          <img src={eligibility} alt="Eligibility" />
        </div>
        <div className="SideBar__text">Eligibility</div>
      </div>
      <div className="SideBar__nav-item" onClick={() => onFormChange(3)}>
        <div className="SideBar__icon">
          <img src={history} alt="History" />
        </div>
        <div className="SideBar__text">History</div>
      </div>
      <div className="SideBar__nav-item potato" onClick={() => onFormChange(4)}>
        <div className="SideBar__icon">
          <img src={schedule} alt="Schedule" />
        </div>
        <div className="SideBar__text">Schedule</div>
      </div>
    </div>
  );
}
