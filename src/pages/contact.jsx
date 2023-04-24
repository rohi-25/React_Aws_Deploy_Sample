import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
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
                                    <li className="breadcrumb-item text-white">Contact</li>
                                </ul>
                            </nav>
                            <h1 className="text-center text-white">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="row text-center align-items-center">
                        <div className="col-lg-4 py-3 animate__animated animate__fadeInUp">
                            <div className="display-4 text-center text-primary"><span className="mai-pin" /></div>
                            <p className="mb-3 font-weight-medium text-lg">Address</p>
                            <p className="mb-0 text-secondary">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="col-lg-4 py-3 animate__animated animate__fadeInUp">
                            <div className="display-4 text-center text-primary"><span className="mai-call" /></div>
                            <p className="mb-3 font-weight-medium text-lg">Phone</p>
                            <p className="mb-0"><span className="text-secondary">+91 9876543210</span></p>
                            <p className="mb-0"><span className="text-secondary">+91 9789681510</span></p>
                        </div>
                        <div className="col-lg-4 py-3 animate__animated animate__fadeInUp">
                            <div className="display-4 text-center text-primary"><span className="mai-mail" /></div>
                            <p className="mb-3 font-weight-medium text-lg">Email Address</p>
                            <p className="mb-0"><span className="text-secondary">support@maxyz.com</span></p>
                            <p className="mb-0"><span className="text-secondary">hello@maxyz.com</span></p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <form action="#" className="contact-form py-5 px-lg-5">
                                <h2 className="mb-4 font-weight-medium text-secondary">Get in touch</h2>
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-black" htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="message">Message</label>
                                        <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Write your notes or questions here..." defaultValue={""} />
                                    </div>
                                </div>
                                <div className="row form-group mt-4">
                                    <div className="col-md-12">
                                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="maps-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3363886066177!2d76.95572547546698!3d10.937942256192844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bb22369d571%3A0x72cc0bed93b5b2b6!2sSri%20Krishna%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1682363306629!5m2!1sen!2sin" width={750} height={710} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="gmaps"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
