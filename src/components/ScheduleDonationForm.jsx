import "../styles/ScheduleDonationForm.css";
import calendar from "../assets/mynaui_calendar.svg";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, deleteDoc, query, where, getDocs } from "firebase/firestore";
import {db} from "../firebase";
export default function ScheduleDonationForm({donorData,currentUser}){
    const [form, setForm] = useState({ date: "", time: "", location: "" });
    const [upcoming, setUpcoming] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Helper: combine date and time into a JS Date object
    function getDateTime(date, time) {
      return new Date(`${date}T${time}`);
    }

    // Fetch upcoming donation on mount
    useEffect(() => {
      const fetchUpcoming = async () => {
        if (!currentUser) return;
        const db = getFirestore();
        const docRef = doc(db, "scheduledDonations", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUpcoming(docSnap.data());
        } else {
          setUpcoming(null);
        }
      };
      fetchUpcoming();
    }, [currentUser]);

    useEffect(() => {
      const checkAndMoveCompleted = async () => {
        if (!currentUser) return;
        const db = getFirestore();
        const docRef = doc(db, "scheduledDonations", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const scheduledDateTime = getDateTime(data.date, data.time);
          if (scheduledDateTime < new Date()) {
            // Move to history
            await addDoc(collection(db, "historyDonations"), {
              ...data,
              userId: currentUser.uid,
              completedAt: new Date().toISOString(),
            });
            // Remove from scheduled
            await deleteDoc(docRef);
            setUpcoming(null); // Clear upcoming state
          }
        }
      };
      checkAndMoveCompleted();
    }, [currentUser]);

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const checkExistingHistory = async () => {
        const db = getFirestore();
        const historyRef = collection(db, "historyDonations");
        const q = query(historyRef, where("userId", "==", currentUser.uid), where("date", "==", form.date), where("time", "==", form.time));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty; // Returns true if there is an existing entry
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            // Check if the scheduled time has passed immediately
            const scheduledDateTime = getDateTime(form.date, form.time);
            if (scheduledDateTime < new Date()) {
                // Move to history if the scheduled time has passed
                const db = getFirestore();
                await addDoc(collection(db, "historyDonations"), {
                    ...form,
                    userId: currentUser.uid,
                    completedAt: new Date().toISOString(),
                });
                setError("The scheduled time has already passed. Moved to history.");
                setForm({ date: "", time: "", location: "" });
                setLoading(false);
                return;
            }

            // Block if already upcoming
            if (upcoming) {
                setError("You already have an upcoming scheduled donation.");
                setLoading(false);
                return;
            }

            // Save to Firestore
            const db = getFirestore();
            const docRef = doc(db, "scheduledDonations", currentUser.uid);
            await setDoc(docRef, { ...form });
            setUpcoming({ ...form });
            setSuccess("Donation scheduled successfully!");
        } catch (err) {
            setError("Failed to schedule donation.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="ScheduleDonation__Form-container">
            <div className="ScheduleDonation__Form">
                <div className="ScheduleDonation__Form-header">
                    <div className="ScheduleDonation__Donor-head">Schedule Donation</div>
                    <div className="ScheduleDonation__Donor-desc">Book your next blood donation appointment</div>
                </div>
                <form className="ScheduleDonation__Frame1" onSubmit={handleSubmit}>
                    <div className="ScheduleDonation__InputRow">
                        <div className="ScheduleDonation__InputField">
                            <div className="ScheduleDonation__LabelStack">Preferred Date</div>
                            <div className="ScheduleDonation__TextInput">
                                <input type="date" name="date" value={form.date} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="ScheduleDonation__InputField">
                            <div className="ScheduleDonation__LabelStack">Preferred Time</div>
                            <div className="ScheduleDonation__TextInput">
                                <input type="time" name="time" value={form.time} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="ScheduleDonation__InputRow">
                        <div className="ScheduleDonation__InputField">
                            <div className="ScheduleDonation__LabelStack">Location</div>
                            <div className="ScheduleDonation__TextInput">
                                <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Enter your Address" required />
                            </div>
                        </div>
                    </div>
                    <div className="ScheduleDonation__last">
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        {success && <div style={{ color: 'green' }}>{success}</div>}
                        <button className="ScheduleDonation__savebtn" type="submit" disabled={loading}>Schedule</button>
                    </div>
                </form>
            </div>
            <div className="ScheduleDonation__upcoming-appointments">
                <div className="ScheduleDonation__up-head">Upcoming Appointments</div>
                <div className="ScheduleDonation__time-slots">
                    {upcoming ? (
                        <div className="ScheduleDonation__time-up-div">
                            <div className="ScheduleDonation__group-cal-details">
                                <div className="ScheduleDonation__cal-icon">
                                    <img src={calendar} alt="calendar" />
                                </div>
                                <div className="ScheduleDonation__info-up-div">
                                    <div className="ScheduleDonation__date-time-upd">{upcoming.date} at {upcoming.time}</div>
                                    <div className="ScheduleDonation__hospital-loc">{upcoming.location}</div>
                                </div>
                            </div>
                            <div className="ScheduleDonation__flag-reg">Regular Donation</div>
                        </div>
                    ) : (
                        <div>No upcoming appointments.</div>
                    )}
                </div>
            </div>
        </div>
    )
}