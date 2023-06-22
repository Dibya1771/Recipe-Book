import React from "react";
import "../CSS/Footer.css";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";


const Footer = () => {
    return (
        <div className="footer">
            <div className="row1">
                <a href="#">
                    <Facebook />
                </a>
                <a href="#">
                    <Instagram />
                </a>
                <a href="#">
                    <LinkedIn />
                </a>
                <a href="#">
                    <Twitter />
                </a>
            </div>

            <div className="row">
                <ul>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                        <a href="#">Our Services</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Career</a>
                    </li>
                </ul>
            </div>

            <div className="row">
                COOKIFY Copyright © 2023 Cookify - All rights reserved
            </div>
        </div>
    );
};
export default Footer;
