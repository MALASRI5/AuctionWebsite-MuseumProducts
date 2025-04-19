import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Playstore from './android-app.svg';
import Appleios from './ios-app.svg';
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="newsletter">
                <h2>Subscribe to our Newsletter</h2>
                <p>Stay informed with MuzeoLux’s top stories, videos, events & news.</p>
                <p>Receive the best from MuzeoLux delivered to your inbox.</p>
                <div className="newsletter-form">
                    <div className="input-container">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <input type="text" placeholder="*Name" />
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faAt} className="icon" />
                        <input type="email" placeholder="*Email" />
                    </div>
                    <button className="submit-btn">SUBMIT</button>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-list">
                    <ul>
                        <h4>Know More</h4>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li>Request an Estimate</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="footer-list">
                    <ul><h4>Services</h4>
                        <li>Client Advisory</li>
                        <li>Restoration</li>
                        <li>Collection Services</li>
                        <li>Museum Services</li>
                        <li>Post Sale Services</li>
                        <li>Private Services</li>
                        <li>Storage</li>
                    </ul>
                </div>

                <div className="footer-list">
                    <ul>
                        <h4>About</h4>
                        <li>Who We Are</li>
                        <li>Press</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div className="footer-list">
                    <ul>
                        <h4>Discover</h4>
                        <li>Record Price Artwork</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footer-list">
                    <h4>Download App</h4>
                    <div className="download">
                        <img src={Playstore} alt="android-app" width={130}></img>
                        <img src={Appleios} alt="iphone-app" width={130}></img>
                    </div>
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                    </div>
                </div>
            </div>
            <div className="footer-copyrights">
                <p>&copy; Copyright MuzeoLux 2020. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
