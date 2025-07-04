import React from "react";
import "./Footer.css";
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-row">
                    {/* JSW Steel Dolvi Address */}
                    <div className="footer-column">
                        <h5>JSW Steel Dolvi</h5>
                        <p>Village: Dolvi, Taluka: Pen,</p>
                        <p>District: Raigad, Maharashtra - 402107</p>
                        <p>Phone: +91-2192-283001</p>
                    </div>

                    {/* JSW Headquarters */}
                    <div className="footer-column">
                        <h5>JSW Steel Headquarters</h5>
                        <p>JSW Centre, Bandra Kurla Complex,</p>
                        <p>Bandra East, Mumbai - 400051, Maharashtra, India</p>
                        <p>Phone: +91-22-42861000</p>
                        <p>Email: contact@jsw.in</p>
                    </div>

                   
                    <div className="footer-column">
                        <h5>Useful Links</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="https://www.jsw.in/" target="_blank" rel="noopener noreferrer">
                                    JSW Official Website
                                </a>
                            </li>
                            <li>
                               
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="footer-socials">
                    <a href="https://x.com/thejswgroup" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.youtube.com/channel/UCMauB1IhqTxH982vZmdJoVw" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaYoutube />
                    </a>
                    <a href="https://www.facebook.com/JSWGroupOfficial/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/company/jswgroup/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/jsw.group?igsh=aTk1cXZkM2o0bnEx" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} JSW Steel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
