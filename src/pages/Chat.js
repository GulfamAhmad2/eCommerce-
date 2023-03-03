import React from "react";
import { Link } from "react-router-dom";
import Dot from "../components/assets/svg/dot.svg";
import Share from "../components/assets/svg/share.svg";
import Pr36 from "../components/assets/img/pr36.png";

const Chat = () => {
  return (
    <>
      <div className="chat-container">
        <div className="chat-con-1">
          <div className="pr-profile">
            <div className="pr-profile-img">
              <img src={Pr36} />
            </div>
            <Link to="/sellerProfile">
              <span className="pr-profile-name">Mouse Elit</span>
            </Link>
          </div>
          <div className="online-con">
            <img src={Dot} />
            <span>Online</span>
          </div>
        </div>
        <div className="chat-con-2">
          <div className="chat-box">
            <div className="chat-input">
              <input type="text" placeholder="Type to message..." />
              <img src={Share}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
