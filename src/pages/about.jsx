import React from 'react'
import { Link } from 'react-router-dom'
import about_frame from '../assets/img/about_frame.png';
export default function About() {
    return (
        <>
            <div className="container">
                <div className="page-banner area">
                    <ul className="circles">
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                                    <li className="breadcrumb-item text-white">About</li>
                                </ul>
                            </nav>
                            <h1 className="text-center text-white">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-3  animate__animated animate__fadeInUp">
                            <span className="subhead">About us</span>
                            <h2 className="title-section">The number #1 SEO Service Company</h2>
                            <div className="divider" />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                            <Link to="/about" className="btn btn-primary mt-3">Read More</Link>
                        </div>
                        <div className="col-lg-6 py-3  animate__animated animate__fadeInRight">
                            <div className="img-fluid py-3 text-center">
                                <img src={about_frame} alt="max" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section">
                <div className="container">
                    <div className="text-center animate__animated animate__fadeInUp">
                        <div className="subhead">Pricing Plan</div>
                        <h2 className="title-section">Choose plan the right for you</h2>
                        <div className="divider mx-auto" />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 py-3 animate__fadeIn">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="pricing-type">Basic</div>
                                    <div className="price">
                                        <span className="dollar">$</span>
                                        <h1>39<span className="suffix">.99</span></h1>
                                    </div>
                                    <h5>Per Month</h5>
                                </div>
                                <div className="body">
                                    <p>25 Analytics <span className="suffix">Campaign</span></p>
                                    <p>1,300 Change <span className="suffix">Keywords</span></p>
                                    <p>Social Media <span className="suffix">Reviews</span></p>
                                    <p>1 Free <span className="suffix">Optimization</span></p>
                                    <p>24/7 <span className="suffix">Support</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 py-3 animate__fadeIn">
                            <div className="card-pricing marked">
                                <div className="header">
                                    <div className="pricing-type">Standar</div>
                                    <div className="price">
                                        <span className="dollar">$</span>
                                        <h1>59<span className="suffix">.99</span></h1>
                                    </div>
                                    <h5>Per Month</h5>
                                </div>
                                <div className="body">
                                    <p>25 Analytics <span className="suffix">Campaign</span></p>
                                    <p>1,300 Change <span className="suffix">Keywords</span></p>
                                    <p>Social Media <span className="suffix">Reviews</span></p>
                                    <p>1 Free <span className="suffix">Optimization</span></p>
                                    <p>24/7 <span className="suffix">Support</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 py-3 animate__fadeIn">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="pricing-type">Professional</div>
                                    <div className="price">
                                        <span className="dollar">$</span>
                                        <h1>99<span className="suffix">.99</span></h1>
                                    </div>
                                    <h5>Per Month</h5>
                                </div>
                                <div className="body">
                                    <p>25 Analytics <span className="suffix">Campaign</span></p>
                                    <p>1,300 Change <span className="suffix">Keywords</span></p>
                                    <p>Social Media <span className="suffix">Reviews</span></p>
                                    <p>1 Free <span className="suffix">Optimization</span></p>
                                    <p>24/7 <span className="suffix">Support</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
