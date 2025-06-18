import "../styles/Footer.css";
import heartlogo from "../assets/HeartLogo.svg";

export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="Logo">
                    <div className="Logo-img">
                        <img src={heartlogo}></img>
                    </div>
                    <div className="Logo-text">BloodConnect</div>
                </div>
                <div className="Footertxt">Connecting hearts, saving lives. Every donation matters.</div>
            </div>
        </>
    )
}