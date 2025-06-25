import "../styles/ScheduleDonation.css";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import calendar from "../assets/mynaui_calendar.svg";

export default function ScheduleDonation() {
  return (
    <>
      <div className="ScheduleDonationPage">
        <Navbar></Navbar>
        <div className="CardsHolder">
          <div className="LeftNav">
            <SideBar></SideBar>
          </div>
          <div className="Right">
            <div className="Form">
                <div className="Form-header">
                    <div className="Donor-head">Schedule Donation</div>
                    <div className="Donor-desc">Book your next blood donation appointment</div>
                </div>
                <div className="Frame1">
                    <div className="InputRow">
                        <div className="InputField">
                            <div className="LabelStack">Preferred Date</div>
                            <div className="TextInput">
                                <input type="date" ></input>
                            </div>
                        </div>
                        <div className="InputField">
                            <div className="LabelStack">Preferred Time</div>
                            <div className="TextInput">
                                <input type="time" autocomplete="off" />
                            </div>
                        </div>
                    </div>
                    <div className="InputRow">
                      <div className="InputField">
                        <div className="LabelStack">Location</div>
                        <div className="TextInput">
                          <input type="text" placeholder="Enter your Address" ></input>
                        </div>
                      </div>
                    </div>
                    <div class="last">
                      <button class="savebtn">Save Profile</button>
                    </div>
                </div>
            </div>
            <div className="upcoming-appointments">
              <div className="up-head">Upcoming Appointments</div>
              <div className="time-slots">
                <div className="time-up-div">
                  <div className="group-cal-details">
                    <div className="cal-icon">
                      <img src={calendar}></img>
                    </div>
                    <div className="info-up-div">
                      <div className="date-time-upd">2024-02-17 at 10:00 AM</div>
                      <div className="hospital-loc">City Hospital</div>
                    </div>
                  </div>
                  <div className="flag-reg">Regular Donation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
