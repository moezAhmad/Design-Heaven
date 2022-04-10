import React from "react";
import "../../../App.scss";
import image1 from "./Assets/image1.svg";
import image2 from "./Assets/image2.svg";
import image3 from "./Assets/image3.svg";
import image4 from "./Assets/image4.svg";

const navItems = {
  navItemsLeft: [
    {
      id: 1,
      text: "About",
      to: "/about",
    },
    {
      id: 2,
      text: "FAQs",
      to: "/faqs",
    },
    {
      id: 3,
      text: "Hire",
      to: "/hire",
    },
    {
      id: 4,
      text: "Apply",
      to: "/apply",
    },
  ],
  navItemsRight: {
    text: [
      {
        id: 1,
        text: "Help Center",
        to: "help_center",
      },
    ],
    logo: {
      id: 2,
      text: "g",
      to: "/",
    },
  },
};

export class LandingFooter extends React.Component {
  render() {
    return (
      <>
        <div style={{ height: "15px", backgroundColor: "#f4f4f4" }}></div>

        <div className=" landing__footer">
          <div className="Outer_div">
            <div className="first_column">
              <ul>
                <li className="bold_font">DesignHeaven</li>
                <li>About Us</li>
                <li>Testimonals</li>
                <li>FAQS</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="other_column">
              <ul>
                <li className="bold_font">Competition </li>
                <li>Start Competition</li>
                <li>Current Competitions</li>
                <li>Previous Competition </li>
                <li>How it works?</li>
              </ul>
            </div>

            <div className="other_column">
              <ul>
                <li className="bold_font">Designer </li>
                <li>Apply</li>
                <li>Contact Us</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
              
              </ul>
            </div>

            <div className="other_column">
              <ul>
                <li className="bold_font">Report</li>
                <li>File a complaint</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
              
              </ul>
            </div>
          </div>
          <hr className="line1"/>

          <div className="social_media">
            <p class="gray-filter" style={{ fontSize: "1px" }}>
              <larger>© DesignHeaven</larger> &nbsp; &nbsp;
            </p>
            <div className="social_media_div">
              <img
                src={image2}
                className="gray-filter social_media_img"
                alt=""
              />
              <img
                src={image1}
                className="gray-filter social_media_img"
                alt=""
              />
              <img
                src={image3}
                className="gray-filter social_media_img"
                alt=""
              />
              <img
                src={image4}
                className="gray-filter social_media_img"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
