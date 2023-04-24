import React from 'react'
import { Link } from 'react-router-dom'
import service_1 from '../assets/img/services/service-1.svg';
import service_2 from '../assets/img/services/service-2.svg';
import service_3 from '../assets/img/services/service-3.svg';
export default function Service() {
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
                                    <li className="breadcrumb-item text-white">Services</li>
                                </ul>


                            </nav>
                            <h1 className="text-center text-white">Our Services</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-service animate__animated animate__fadeInUp">
                                <div className="header">
                                    <img src={service_1} alt="max" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">SEO Consultancy</h5>
                                    <p>We help you define your SEO objective &amp; develop a realistic strategy with you</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service animate__animated animate__fadeInUp">
                                <div className="header">
                                    <img src={service_2} alt="max" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Content Marketing</h5>
                                    <p>We help you define your SEO objective &amp; develop a realistic strategy with you</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service animate__animated animate__fadeInUp">
                                <div className="header">
                                    <img src={service_3} alt="max" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Keyword Research</h5>
                                    <p>We help you define your SEO objective &amp; develop a realistic strategy with you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section bg-light">
                <div className="container">
                    <div className="text-center animate__animated animate__fadeInUp">
                        <div className="subhead">Our services</div>
                        <h2 className="title-section">How SEO Team Can Help</h2>
                        <div className="divider mx-auto" />
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                            <div className="features">
                                <div className="header mb-3">
                                    <span className="mai-business" />
                                </div>
                                <h5>OnSite SEO</h5>
                                <p>We analyse your website's structure, internal architecture &amp; other key</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
