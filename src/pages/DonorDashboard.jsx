import React, { useState } from "react";
import Navbar from "../components/Navbar";
import heart_icon from "../assets/solar_heart-bold-duotone.svg";
import calendar from "../assets/mynaui_calendar.svg";
import profile from "../assets/iconamoon_profile-fill.svg";
import schedule from "../assets/mynaui_calendar.svg";
import history from "../assets/material-symbols_history-rounded.svg";
import eligibility from "../assets/bitcoin-icons_verify-filled.svg";
import "../styles/SideBar.css";
import "../styles/Donorprofile.css";
import "../styles/EligibilityDonation.css";
import "../styles/HistoryDonation.css";
import "../styles/ScheduleDonation.css";

export default function DonorDashboard() {
  const [activeForm, setActiveForm] = useState(1); // 1: Profile, 2: Eligibility, 3: History, 4: Schedule
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bloodType: "",
    phoneNumber: "",
    age: "",
    weight: "",
    address: "",
    medicalHistory: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Sidebar rendering function
  const renderSidebar = () => (
    <div className="SideBar__container">
      <div className="SideBar__Navigation">Navigation</div>
      <div
        className={`SideBar__nav-item ${
          activeForm === 1 ? "SideBar__nav-item--active" : ""
        }`}
        onClick={() => setActiveForm(1)}
      >
        <div className="SideBar__icon">
          <img src={profile} alt="Profile" />
        </div>
        <div className="SideBar__text">Profile</div>
      </div>
      <div
        className={`SideBar__nav-item ${
          activeForm === 2 ? "SideBar__nav-item--active" : ""
        }`}
        onClick={() => setActiveForm(2)}
      >
        <div className="SideBar__icon">
          <img src={eligibility} alt="Eligibility" />
        </div>
        <div className="SideBar__text">Eligibility</div>
      </div>
      <div
        className={`SideBar__nav-item ${
          activeForm === 3 ? "SideBar__nav-item--active" : ""
        }`}
        onClick={() => setActiveForm(3)}
      >
        <div className="SideBar__icon">
          <img src={history} alt="History" />
        </div>
        <div className="SideBar__text">History</div>
      </div>
      <div
        className={`SideBar__nav-item ${
          activeForm === 4 ? "SideBar__nav-item--active" : ""
        }`}
        onClick={() => setActiveForm(4)}
      >
        <div className="SideBar__icon">
          <img src={schedule} alt="Schedule" />
        </div>
        <div className="SideBar__text">Schedule</div>
      </div>
    </div>
  );

  const renderProfileForm = () => (
    <div className="Donorprofile__Profile-form">
      <div className="Donorprofile__Form-header">
        <div className="Donorprofile__Donor-head">Donor Profile</div>
        <div className="Donorprofile__Donor-desc">
          Complete your profile to help us match you with recipients
        </div>
      </div>
      <div className="Donorprofile__Frame1">
        <div className="Donorprofile__InputRow">
          <div className="Donorprofile__InputField">
            <div className="Donorprofile__LabelStack">Full Name</div>
            <div className="Donorprofile__TextInput">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your Name"
              />
            </div>
          </div>
          <div className="Donorprofile__InputField">
            <div className="Donorprofile__LabelStack">Blood Type</div>
            <div className="Donorprofile__TextInput">
              <select
                name="bloodType"
                value={formData.bloodType}
                onChange={handleInputChange}
              >
                <option value="">Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="Donorprofile__InputRow">
          <div className="Donorprofile__InputField">
            <div className="Donorprofile__LabelStack">Email</div>
            <div className="Donorprofile__TextInput">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div className="Donorprofile__InputField">
            <div className="Donorprofile__LabelStack">Phone Number</div>
            <div className="Donorprofile__TextInput">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="Donorprofile__last">
          <button className="Donorprofile__savebtn">Save Profile</button>
        </div>
      </div>
    </div>
  );

  const renderEligibilityForm = () => (
    <div className="EligibilityDonation__Profile-form">
      <div className="EligibilityDonation__Form-header">
        <div className="EligibilityDonation__Donor-head">Eligibility Check</div>
        <div className="EligibilityDonation__Donor-desc">
          Check your eligibility to donate
        </div>
      </div>
      <div className="EligibilityDonation__time-slots">
        <div className="EligibilityDonation__time-up-div">
          <div className="EligibilityDonation__group-cal-details">
            <div className="EligibilityDonation__info-up-div">
              <div className="EligibilityDonation__date-time-upd">
                Age(18-65 years)
              </div>
              <div className="EligibilityDonation__hospital-loc">
                You meet the age requirement
              </div>
            </div>
          </div>
          <div className="EligibilityDonation__flag-reg">pending</div>
        </div>
        <div className="EligibilityDonation__time-up-div">
          <div className="EligibilityDonation__group-cal-details">
            <div className="EligibilityDonation__info-up-div">
              <div className="EligibilityDonation__date-time-upd">
                Weight(&gt50kg)
              </div>
              <div className="EligibilityDonation__hospital-loc">
                You meet the weight requirement
              </div>
            </div>
          </div>
          <div className="EligibilityDonation__flag-reg">pending</div>
        </div>
      </div>
      <div className="EligibilityDonation__last">
        <button className="EligibilityDonation__savebtn">
          Complete Health Questionnaire
        </button>
      </div>
    </div>
  );

  const renderHistoryForm = () => (
    <div className="HistoryDonation__Profile-form">
      <div className="HistoryDonation__Form-header">
        <div className="HistoryDonation__Donor-head">Donation History</div>
        <div className="HistoryDonation__Donor-desc">
          Your contribution to saving lives
        </div>
      </div>
      <div className="HistoryDonation__time-slots">
        <div className="HistoryDonation__time-up-div">
          <div className="HistoryDonation__group-cal-details">
            <div className="HistoryDonation__cal-icon">
              <img src={heart_icon} alt="Heart Icon" />
            </div>
            <div className="HistoryDonation__info-up-div">
              <div className="HistoryDonation__date-time-upd">
                2024-02-17 at 10:00 AM
              </div>
              <div className="HistoryDonation__hospital-loc">City Hospital</div>
            </div>
          </div>
          <div className="HistoryDonation__flag-reg">Completed</div>
        </div>
      </div>
      <div className="HistoryDonation__total-donations">
        <div className="HistoryDonation__heart-icon-center">
          <img src={heart_icon} alt="Heart Icon" />
        </div>
        <div className="HistoryDonation__Data-total-donation">
          Total Donation: 3
        </div>
        <div className="HistoryDonation__static-text-donations">
          You've potentially saved 9 lives
        </div>
      </div>
    </div>
  );

  const renderScheduleForm = () => (
    <div className="ScheduleDonation__Form">
      <div className="ScheduleDonation__Form-header">
        <div className="ScheduleDonation__Donor-head">Schedule Donation</div>
        <div className="ScheduleDonation__Donor-desc">
          Book your next blood donation appointment
        </div>
      </div>
      <div className="ScheduleDonation__Frame1">
        <div className="ScheduleDonation__InputRow">
          <div className="ScheduleDonation__InputField">
            <div className="ScheduleDonation__LabelStack">Preferred Date</div>
            <div className="ScheduleDonation__TextInput">
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ScheduleDonation__InputField">
            <div className="ScheduleDonation__LabelStack">Preferred Time</div>
            <div className="ScheduleDonation__TextInput">
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="ScheduleDonation__last">
          <button className="ScheduleDonation__savebtn">
            Schedule Appointment
          </button>
        </div>
      </div>
      <div className="ScheduleDonation__upcoming-appointments">
        <div className="ScheduleDonation__up-head">Upcoming Appointments</div>
        <div className="ScheduleDonation__time-slots">
          <div className="ScheduleDonation__time-up-div">
            <div className="ScheduleDonation__group-cal-details">
              <div className="ScheduleDonation__cal-icon">
                <img src={calendar} alt="Calendar" />
              </div>
              <div className="ScheduleDonation__info-up-div">
                <div className="ScheduleDonation__date-time-upd">
                  2024-02-17 at 10:00 AM
                </div>
                <div className="ScheduleDonation__hospital-loc">
                  City Hospital
                </div>
              </div>
            </div>
            <div className="ScheduleDonation__flag-reg">Regular Donation</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveForm = () => {
    switch (activeForm) {
      case 1:
        return renderProfileForm();
      case 2:
        return renderEligibilityForm();
      case 3:
        return renderHistoryForm();
      case 4:
        return renderScheduleForm();
      default:
        return renderProfileForm();
    }
  };

  return (
    <div className="Donorprofile__Home-container">
      <Navbar />
      <div className="Donorprofile__CardsHolder">
        <div className="Donorprofile__LeftNav">{renderSidebar()}</div>
        <div className="Donorprofile__Right">{renderActiveForm()}</div>
      </div>
    </div>
  );
}
