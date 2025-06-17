import hearticon from "../assets/heart-circle-icon.svg";
export default function Footer(){
    return (<>
        <div className="last">
            <div className="logo">
                <div id="logoimg">
                    <div id="cir">
                        <img src={hearticon}></img>
                    </div>
                </div>
                <div className="logoname">BloodConnect</div>
            </div>
            <div className="lastline">Connecting hearts, saving lives. Every donation matters.</div>
        </div>
    </>)
}