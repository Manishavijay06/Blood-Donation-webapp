import "../styles/ProfileForm.css";
export default function ProfileForm(){
    return(
        <>
        <div className="Donorprofile__Profile-form">
                <div className="Donorprofile__Form-header">
                    <div className="Donorprofile__Donor-head">Donor Profile</div>
                    <div className="Donorprofile__Donor-desc">Complete your profile to help us match you with recipients</div>
                </div>
                <div className="Donorprofile__Frame1">
                    <div className="Donorprofile__InputRow">
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Full Name</div>
                            <div className="Donorprofile__TextInput">
                                <input type="text" placeholder="Enter your Name"></input>
                            </div>
                        </div>
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Blood Type</div>
                            <div className="Donorprofile__TextInput">
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
                    <div className="Donorprofile__InputRow">
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Email</div>
                            <div className="Donorprofile__TextInput">
                                <input type="email" placeholder="Enter your Email"></input>
                            </div>
                        </div>
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Phone Number</div>
                            <div className="Donorprofile__TextInput">
                                <input type="tel" autoComplete="off" />
                            </div>
                        </div>
                    </div>
                    <div className="Donorprofile__InputRow">
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Age</div>
                            <div className="Donorprofile__TextInput">
                                <input type="number" placeholder="Enter your Age" min="18"></input>
                            </div>
                        </div>
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Weight (in kg)</div>
                            <div className="Donorprofile__TextInput">
                                <input type="number" placeholder="Enter your weight" autoComplete="off"></input>
                            </div>
                        </div>
                    </div>
                    <div className="Donorprofile__InputRow">
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Address</div>
                            <div className="Donorprofile__TextInput">
                                <input type="text" placeholder="Enter your Address" ></input>
                            </div>
                        </div>
                    </div>
                    <div className="Donorprofile__InputRow">
                        <div className="Donorprofile__InputField">
                            <div className="Donorprofile__LabelStack">Medical History (optional)</div>
                            <div className="Donorprofile__TextInput">
                                <textarea  rows="4" placeholder="Any relevant medical history or medications" ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="Donorprofile__last">
                        <button className="Donorprofile__savebtn">Save Profile</button>
                    </div>
                </div>
            </div>
        </>
    )
}