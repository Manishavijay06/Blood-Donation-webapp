import "../styles/Donorprofile.css";
import Navbar from "../components/Navbar.jsx";
import SideBar from "../components/SideBar.jsx";
export default function Donorprofile(){
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
                                <div className="Donor-head">Donor Profile</div>
                                <div className="Donor-desc">Complete your profile to help us match you with recipients</div>
                            </div>
                            <div className="Frame1">
                                <div className="InputRow">
                                    <div className="InputField">
                                        <div className="LabelStack">Full Name</div>
                                        <div className="TextInput">
                                            <input type="text" placeholder="Enter your Name"></input>
                                        </div>
                                    </div>
                                    <div className="InputField">
                                        <div className="LabelStack">Blood Type</div>
                                        <div className="TextInput">
                                            <select >
                                                <option>Select your blood type</option>
                                                <option>A+</option>
                                                <option>A-</option>
                                                <option>B+</option>
                                                <option>B-</option>
                                                <option>AB+</option>
                                                <option>AB-</option>
                                                <option>O+</option>
                                                <option>O-</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="InputRow">
                                    <div className="InputField">
                                        <div className="LabelStack">Email</div>
                                        <div className="TextInput">
                                            <input type="email" placeholder="Enter your Email"></input>
                                        </div>
                                    </div>
                                    <div className="InputField">
                                        <div className="LabelStack">Phone Number</div>
                                        <div className="TextInput">
                                            <input type="tel" autocomplete="off" />
                                        </div>
                                    </div>
                                </div>
                                <div className="InputRow">
                                    <div className="InputField">
                                        <div className="LabelStack">Age</div>
                                        <div className="TextInput">
                                            <input type="number" placeholder="Enter your Age" min="18"></input>
                                        </div>
                                    </div>
                                    <div className="InputField">
                                        <div className="LabelStack">Weight (in kg)</div>
                                        <div className="TextInput">
                                            <input type="number" placeholder="Enter your weight" autocomplete="off"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="InputRow">
                                    <div className="InputField">
                                        <div className="LabelStack">Address</div>
                                        <div className="TextInput">
                                            <input type="text" placeholder="Enter your Address" ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="InputRow">
                                    <div className="InputField">
                                        <div className="LabelStack">Medical History (optional)</div>
                                        <div className="TextInput">
                                            <textarea  rows="4" placeholder="Any relevant medical history or medications" ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="last">
                                    <button class="savebtn">Save Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}