import "../styles/Footer.css";
import heartlogo from "../assets/HeartLogo.svg";

export default function Footer(){
    return(
        <>
            <div className="Footer__container">
                <div className="Footer__Logo">
                    <div className="Footer__Logo-img">
                        <img src={heartlogo}></img>
                    </div>
                    <div className="Footer__Logo-text">BloodConnect</div>
                </div>
                <div className="Footer__text">Connecting hearts, saving lives. Every donation matters.</div>
            </div>
        </>
    )
}