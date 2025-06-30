import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HomePage.css";
import heart from "../assets/solar_heart-bold-duotone.svg";
import search from "../assets/SearchLogo.svg";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate=useNavigate();
    return(<>
        <div className="HomePage__Home-container">
            <Navbar></Navbar>
            
            <div className="HomePage__Hero-section">
                <div className="HomePage__Hero-header">
                    Connect Donors with Recipients
                </div>
                <div className="HomePage__Hero-description">
                    A simple, secure platform to help save lives through blood donation. Whether you're looking to donate or need blood, we're here to help.
                </div>
            </div>
            <div className="HomePage__Cards-holder">
                <div className="HomePage__card">
                    <div className="HomePage__Heart-logo-holder">
                        <img src={heart}></img>
                    </div>
                    <div className="HomePage__Card-text-holder">
                        <div className="HomePage__Card-title">I want to donate</div>
                        <div className="HomePage__Card-desc">Register as a donor and help save lives in your community</div>
                    </div>
                    <div className="HomePage__Perks">
                        <ul>
                            <li>Register your blood type</li>
                            <li>Schedule donation appointments</li>
                            <li>Track your donation history</li>
                            <li>Get notified when blood is needed</li>
                        </ul>
                    </div>
                    <div className="HomePage__DonorButton" onClick={()=>navigate("/donor-dashboard")}>Become a Donor</div>
                </div>

                <div className="HomePage__card">
                    <div className="HomePage__Search-logo-holder">
                        <img src={search}></img>
                    </div>
                    <div className="HomePage__Card-text-holder">
                        <div className="HomePage__Card-title">I need blood</div>
                        <div className="HomePage__Card-desc">Find compatible donors and request blood for medical needs</div>
                    </div>
                    <div className="HomePage__Perks">
                        <ul>
                            <li>Search for compatible donors</li>
                            <li>Submit blood requests</li>
                            <li>Track request status</li>
                            <li>Connect with nearby donors</li>
                        </ul>
                    </div>
                    <div className="HomePage__RecipientButton" onClick={()=>navigate("/recipients")}>Find Donors</div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    </>)
}