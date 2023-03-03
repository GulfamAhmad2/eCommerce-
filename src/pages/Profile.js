import React from "react";
import Pen from "../components/assets/svg/pen.svg";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="edit-container">
          <div className="img-con">
            <span>CE</span>
          </div>
          <button className="edit-btn">
            <img src={Pen} />
            <span>Edit</span>
          </button>
        </div>
        <div className="account-name-container">
          <span className="name-span">Account name</span>
          <input type="text" placeholder="Account name" />
        </div>
        <div className="email-container">
          <span className="name-span">Email</span>
          <div className="email-text">
            <span className="email-container-span">hi@chomerce.com</span>
            <div className="edit-btn">
              <img src={Pen} />
              <span>Edit</span>
            </div>
          </div>
        </div>
        <div className="phone-container">
        <span className="name-span">Phone number</span>
          <div className="email-text">
            <span className="phone-container-span">+841757575555</span>
            <div className="edit-btn">
              <img src={Pen} />
              <span>Edit</span>
            </div>
          </div>
        </div>
        <div className="profile-change-btn">
          <button>Save change</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
