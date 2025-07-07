import "../styles/DonorDashboard.css";
import Navbar from "../components/Navbar.jsx";
import SideBar from "../components/SideBar.jsx";
import ProfileForm from "../components/ProfileForm.jsx";
import ScheduleDonationForm from "../components/ScheduleDonationForm.jsx";
import HistoryDonationForm from "../components/HistoryDonationForm.jsx";
import EligibilityForm from "../components/EligibilityForm.jsx";
import { useState ,useEffect} from "react";
import {db} from "../firebase.js";
import {doc,getDoc} from "firebase/firestore";
import {useAuth} from "../context/AuthContext.jsx";

export default function DonorDashboard(){
    const [formType,setFormType]=useState(1);
    const {currentUser}=useAuth();
    const [donorData,setDonorData]=useState(null);

    useEffect(()=>{
        const fetchDonorData=async()=>{
            if(!currentUser){
                return;
            }
            const docRef=doc(db,"users",currentUser.uid);
            const userSnap=await getDoc(docRef);
            if(userSnap.exists()){
                const donorData=userSnap.data();
                setDonorData(donorData);
            }
        };
        fetchDonorData();
    },[currentUser]);

    return(
        <>
            <div className="DonorDashboard__Home-container">
                <Navbar currentUser={currentUser}></Navbar>
                <div className="DonorDashboard__CardsHolder">
                    <div className="DonorDashboard__LeftNav">
                        <SideBar formType={formType} onFormChange={setFormType}></SideBar>
                    </div>
                    <div className="DonorDashboard__Right">
                        {formType === 1 && <ProfileForm donorData={donorData} currentUser={currentUser} />}
                        {formType === 2 && <ScheduleDonationForm donorData={donorData}  currentUser={currentUser}/>} 
                        {formType === 3 && <HistoryDonationForm donorData={donorData} currentUser={currentUser}/>}  
                        {formType === 4 && <EligibilityForm donorData={donorData} currentUser={currentUser}/>}     
                    </div>
                </div>
            </div>
        </>
    );
}