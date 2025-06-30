import "../styles/ScheduleDonation.css";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import calendar from "../assets/mynaui_calendar.svg";

export default function ScheduleDonation() {
  return (
    <>
      <div className="ScheduleDonation__Page">
        <Navbar></Navbar>
        <div className="ScheduleDonation__CardsHolder">
          <div className="ScheduleDonation__LeftNav">
            <SideBar></SideBar>
          </div>
          <div className="ScheduleDonation__Right">
            <div className="ScheduleDonation__Form">
              <div className="ScheduleDonation__Form-header">
                <div className="ScheduleDonation__Donor-head">
                  Schedule Donation
                </div>
                <div className="ScheduleDonation__Donor-desc">
                  Book your next blood donation appointment
                </div>
              </div>
              <div className="ScheduleDonation__Frame1">
                <div className="ScheduleDonation__InputRow">
                  <div className="ScheduleDonation__InputField">
                    <div className="ScheduleDonation__LabelStack">
                      Preferred Date
                    </div>
                    <div className="ScheduleDonation__TextInput">
                      <input type="date"></input>
                    </div>
                  </div>
                  <div className="ScheduleDonation__InputField">
                    <div className="ScheduleDonation__LabelStack">
                      Preferred Time
                    </div>
                    <div className="ScheduleDonation__TextInput">
                      <input type="time" autoComplete="off" />
                    </div>
                  </div>
                </div>
                <div className="ScheduleDonation__InputRow">
                  <div className="ScheduleDonation__InputField">
                    <div className="ScheduleDonation__LabelStack">Location</div>
                    <div className="ScheduleDonation__TextInput">
                      <input
                        type="text"
                        placeholder="Enter your Address"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="ScheduleDonation__last">
                  <button className="ScheduleDonation__savebtn">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="ScheduleDonation__upcoming-appointments">
              <div className="ScheduleDonation__up-head">
                Upcoming Appointments
              </div>
              <div className="ScheduleDonation__time-slots">
                <div className="ScheduleDonation__time-up-div">
                  <div className="ScheduleDonation__group-cal-details">
                    <div className="ScheduleDonation__cal-icon">
                      <img src={calendar}></img>
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
                  <div className="ScheduleDonation__flag-reg">
                    Regular Donation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
