import "../styles/DonorDashboard.css";
import Navbar from "../components/Navbar.jsx";
import SideBar from "../components/SideBar.jsx";
import ProfileForm from "../components/ProfileForm.jsx";
import ScheduleDonationForm from "../components/ScheduleDonationForm.jsx";
import HistoryDonationForm from "../components/HistoryDonationForm.jsx";
import EligibilityForm from "../components/EligibilityForm.jsx";
import { useState } from "react";

export default function DonorDashboard(){
    const [formType,setFormType]=useState(1);
    return(
        <>
            <div className="DonorDashboard__Home-container">
                <Navbar></Navbar>
                <div className="DonorDashboard__CardsHolder">
                    <div className="DonorDashboard__LeftNav">
                        <SideBar formType={formType} onFormChange={setFormType}></SideBar>
                    </div>
                    <div className="DonorDashboard__Right">
                        {formType === 1 && <ProfileForm />}
                        {formType === 2 && <ScheduleDonationForm/>} 
                        {formType === 3 && <HistoryDonationForm/>}  
                        {formType === 4 && <EligibilityForm/>}     
                    </div>
                </div>
            </div>
        </>
    );
}