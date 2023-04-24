import React from 'react';
import world_patter from '../assets/img/world_pattern.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>

            <footer className="page-footer bg-image"  style={{ backgroundImage:`url(${world_patter})`}}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-3 py-3">
                            <h3>MaX</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure.</p>
                            <div className="social-media-button">
                                <span className='m-1'><span className="mai-logo-facebook-f" /></span>
                                <span className='m-1'><span className="mai-logo-twitter" /></span>
                                <span className='m-1'><span className="mai-logo-google-plus-g" /></span>
                            </div>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>Company</h5>
                            <ul className="footer-menu">
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Career</Link></li>
                                <li><Link to="/">Advertise</Link></li>
                                <li><Link to="/">Terms of Service</Link></li>
                                <li><Link to="/">Help &amp; Support</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>Contact Us</h5>
                            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                            <span className="footer-link">+91 9876543210</span>
                            <span className="footer-link">max@ec2deploy.com</span>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>Newsletter</h5>
                            <p>Get updates, news or events on your mail.</p>
                            <form action="#">
                                <input type="text" className="form-control" placeholder="Enter your email.." />
                                <button type="submit" className="btn btn-success btn-block mt-2">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
