import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import "../styles/HistoryDonation.css";
import heart_icon from "../assets/solar_heart-bold-duotone.svg";
import heart_icon_heart from "../assets/HeartLogo.svg";
export default function HistoryDonation() {
  return (
    <>
      <div className="HistoryDonation__Home-container">
        <Navbar></Navbar>
        <div className="HistoryDonation__CardsHolder">
          <div className="HistoryDonation__LeftNav">
            <SideBar></SideBar>
          </div>
          <div className="HistoryDonation__Right">
            <div className="HistoryDonation__Profile-form">
              <div className="HistoryDonation__Form-header">
                <div className="HistoryDonation__Donor-head">
                  History Donation
                </div>
                <div className="HistoryDonation__Donor-desc">
                  Your contribution to saving lives
                </div>
              </div>
              <div className="HistoryDonation__time-slots">
                <div className="HistoryDonation__time-up-div">
                  <div className="HistoryDonation__group-cal-details">
                    <div className="HistoryDonation__cal-icon">
                      <img src={heart_icon}></img>
                    </div>
                    <div className="HistoryDonation__info-up-div">
                      <div className="HistoryDonation__date-time-upd">
                        2024-02-17 at 10:00 AM
                      </div>
                      <div className="HistoryDonation__hospital-loc">
                        City Hospital
                      </div>
                    </div>
                  </div>
                  <div className="HistoryDonation__flag-reg">Completed</div>
                </div>
                <div className="HistoryDonation__time-up-div">
                  <div className="HistoryDonation__group-cal-details">
                    <div className="HistoryDonation__cal-icon">
                      <img src={heart_icon}></img>
                    </div>
                    <div className="HistoryDonation__info-up-div">
                      <div className="HistoryDonation__date-time-upd">
                        2024-02-17 at 10:00 AM
                      </div>
                      <div className="HistoryDonation__hospital-loc">
                        City Hospital
                      </div>
                    </div>
                  </div>
                  <div className="HistoryDonation__flag-reg">Completed</div>
                </div>
                <div className="HistoryDonation__time-up-div">
                  <div className="HistoryDonation__group-cal-details">
                    <div className="HistoryDonation__cal-icon">
                      <img src={heart_icon}></img>
                    </div>
                    <div className="HistoryDonation__info-up-div">
                      <div className="HistoryDonation__date-time-upd">
                        2024-02-17 at 10:00 AM
                      </div>
                      <div className="HistoryDonation__hospital-loc">
                        City Hospital
                      </div>
                    </div>
                  </div>
                  <div className="HistoryDonation__flag-reg">Completed</div>
                </div>
                <div className="HistoryDonation__time-up-div">
                  <div className="HistoryDonation__group-cal-details">
                    <div className="HistoryDonation__cal-icon">
                      <img src={heart_icon}></img>
                    </div>
                    <div className="HistoryDonation__info-up-div">
                      <div className="HistoryDonation__date-time-upd">
                        2024-02-17 at 10:00 AM
                      </div>
                      <div className="HistoryDonation__hospital-loc">
                        City Hospital
                      </div>
                    </div>
                  </div>
                  <div className="HistoryDonation__flag-reg">Completed</div>
                </div>
                <div className="HistoryDonation__time-up-div">
                  <div className="HistoryDonation__group-cal-details">
                    <div className="HistoryDonation__cal-icon">
                      <img src={heart_icon}></img>
                    </div>
                    <div className="HistoryDonation__info-up-div">
                      <div className="HistoryDonation__date-time-upd">
                        2024-02-17 at 10:00 AM
                      </div>
                      <div className="HistoryDonation__hospital-loc">
                        City Hospital
                      </div>
                    </div>
                  </div>
                  <div className="HistoryDonation__flag-reg">Completed</div>
                </div>
                <div className="HistoryDonation__time-up-div">
                  <div className="HistoryDonation__group-cal-details">
                    <div className="HistoryDonation__cal-icon">
                      <img src={heart_icon}></img>
                    </div>
                    <div className="HistoryDonation__info-up-div">
                      <div className="HistoryDonation__date-time-upd">
                        2024-02-17 at 10:00 AM
                      </div>
                      <div className="HistoryDonation__hospital-loc">
                        City Hospital
                      </div>
                    </div>
                  </div>
                  <div className="HistoryDonation__flag-reg">Completed</div>
                </div>
                <div className="HistoryDonation__total-donations">
                  <div className="HistoryDonation__heart-icon-center">
                    <img src={heart_icon}></img>
                  </div>
                  <div className="HistoryDonation__Data-total-donation">
                    Total Donation:3
                  </div>
                  <div className="HistoryDonation__static-text-donations">
                    You've potentially saved 9 lives
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
