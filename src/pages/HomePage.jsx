import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HomePage.css";
import heart from "../assets/solar_heart-bold-duotone.svg";
import search from "../assets/SearchLogo.svg";


export default function HomePage(){
    return(<>
        <div className="Home-container">
            <Navbar></Navbar>
            
            <div className="Hero-section">
                <div className="Hero-header">
                    Connect Donors with Recipients
                </div>
                <div className="Hero-description">
                    A simple, secure platform to help save lives through blood donation. Whether you're looking to donate or need blood, we're here to help.
                </div>
            </div>
            <div className="Cards-holder">
                <div className="card">
                    <div className="Heart-logo-holder">
                        <img src={heart}></img>
                    </div>
                    <div className="Card-text-holder">
                        <div className="Card-title">I want to donate</div>
                        <div className="Card-desc">Register as a donor and help save lives in your community</div>
                    </div>
                    <div className="Perks">
                        <ul>
                            <li>Register your blood type</li>
                            <li>Schedule donation appointments</li>
                            <li>Track your donation history</li>
                            <li>Get notified when blood is needed</li>
                        </ul>
                    </div>
                    <div className="DonorButton">Become a Donor</div>
                </div>

                <div className="card">
                    <div className="Search-logo-holder">
                        <img src={search}></img>
                    </div>
                    <div className="Card-text-holder">
                        <div className="Card-title">I need blood</div>
                        <div className="Card-desc">Find compatible donors and request blood for medical needs</div>
                    </div>
                    <div className="Perks">
                        <ul>
                            <li>Search for compatible donors</li>
                            <li>Submit blood requests</li>
                            <li>Track request status</li>
                            <li>Connect with nearby donors</li>
                        </ul>
                    </div>
                    <div className="RecipientButton">Find Donors</div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    </>)
}