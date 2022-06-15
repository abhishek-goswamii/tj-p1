import React from "react";
import newAcc from "../../assets/images/contactUs/multiUser.png";

import ellipseRight from "../../assets/images/contactUs/ellipse_left.png";
import ellipseLeft from "../../assets/images/contactUs/ellipse_right.png";
import chartImg from "../../assets/images/contactUs/chart.png";
import connectingPeopleImg from "../../assets/images/contactUs/connectingPeople.png";
import contactCardImg from "../../assets/images/contactUs/contactCard.png";
import fileImg from "../../assets/images/contactUs/file.png";
import gearImg from "../../assets/images/contactUs/gear.png";
import userImg from "../../assets/images/contactUs/user.png";
import supportImg from "../../assets/images/contactUs/support.png";
import mapImg from "../../assets/images/contactUs/mapImg.png";

import "./contactUs.css";
import SmallCard from "./smallCard";

const ContactUs = () => {
  return (
    <>
      {/* Contact Us Section */}
      <div className="contact-us-block">
        <div className="header-block">
          <img src={ellipseLeft} alt="multi_user_logo" />
          <h1>Contact Us</h1>
          <img src={ellipseRight} alt="multi_user_logo" />
        </div>
        <div className="contact-us-card">
          <SmallCard
            name={"New Account Opening"}
            imgSrc={newAcc}
            mobNo={"254512152323"}
            emailId={"sale@huufgjfhj"}
          />

          <SmallCard
            name={"Support"}
            imgSrc={supportImg}
            mobNo={"254512152323"}
          />
          <SmallCard
            name={"Funds Deposit/Withdrawal"}
            imgSrc={contactCardImg}
            mobNo={"254512152323"}
            emailId={"sale@huufgjfhj"}
          />
          <SmallCard
            name={"Admin/RMS"}
            imgSrc={userImg}
            mobNo={"254512152323"}
            emailId={"sale@huufgjfhj"}
          />
          <SmallCard
            name={"Trading/Dealing"}
            imgSrc={chartImg}
            mobNo={"254512152323"}
          />
          <SmallCard
            name={"Partnership"}
            imgSrc={connectingPeopleImg}
            mobNo={"254512152323"}
          />
          <SmallCard
            name={"Modification/Reactivation"}
            imgSrc={gearImg}
            mobNo={"254512152323"}
          />
          <SmallCard
            name={"Department"}
            imgSrc={fileImg}
            mobNo={"254512152323"}
          />
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <h1>Locations</h1>
        <div className="location-card-section">
          <div className="location-card">
            <div className="location-card-heading">
              <h2>CORPORATE OFFICE</h2>
              <h3>
                Hall No. 2, 1st Floor Western Block, Above Central Bank, GTB
                Complex, T. T. Nagar, Bhopal-462003
              </h3>
            </div>
            <div className="location-card-bottom-sec">
              <img src={mapImg} alt="image_of_map" />
              <div>
                <div>
                  <h3>CALL US &#64;</h3>
                  <h4>0755-4223778, 4350141-143, 0755-4283016</h4>
                </div>
                <div>
                  <h3>EMAIL US &#64;</h3>
                  <h4>
                    kmlho@kalpatarumulti.com NAME OF CONTACT PERSON Amitabh
                    Manya Jain (M.D.)
                  </h4>
                </div>
                <div>
                  <h3>CONTACT NO</h3>
                  <h4>09425008895</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="location-card">
            <div className="location-card-heading">
              <h2>Head OFFICE</h2>
              <h3>Kalpataru House, 18 Itwara, Bhopal (MP) - 462001</h3>
            </div>
            <div className="location-card-bottom-sec">
              <img src={mapImg} alt="image_of_map" />
              <div>
                <div>
                  <h3>CALL US &#64;</h3>
                  <h4>0755-2530536, 2739822, 4262655</h4>
                </div>
                <div>
                  <h3>EMAIL US &#64;</h3>
                  <h4>kmlho@kalpatarumulti.com</h4>
                </div>
                <div>
                  <h3>CONTACT NO</h3>
                  <h4>09425008895</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
