import React from 'react'
import { Link } from 'react-router-dom';
import banner_image_1 from '../assets/img/banner_image_1.svg';
import banner_image_2 from '../assets/img/banner_image_2.svg';
import service_1 from '../assets/img/services/service-1.svg';
import service_2 from '../assets/img/services/service-2.svg';
import service_3 from '../assets/img/services/service-3.svg';
import about_frame from '../assets/img/about_frame.png';
import bg_pattern from '../assets/img/bg_pattern.svg';
import blog_1 from '../assets/img/blog/blog-1.jpg';
import blog_2 from '../assets/img/blog/blog-2.jpg';
import blog_3 from '../assets/img/blog/blog-3.jpg';
import blog_4 from '../assets/img/aso.jpg';
// import {Animated} from 'react-animated-css'

export default function Home() {
    return (
        <>
            <div className="container" >
                <div className="page-banner home-banner">
                    <div className="row align-items-center flex-wrap-reverse h-100">
                        <div className="col-md-6 py-5 animate__animated animate__fadeInLeft">
                            <h1 className="mb-4">Let's Check and Optimize your website!</h1>
                            <p className="text-lg text-grey mb-5">Ignite the most powerfull growth engine you have ever built for your company</p>
                        </div>
                        <div className="col-md-6 py-5 animate__animated animate__fadeIn">
                            <div className="img-fluid text-center">
                                <img src={banner_image_1} alt="max" />
                            </div>
                        </div>
                    </div>
                    <a href="#about" className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down" /></a>
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

            <div className="page-section" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-3 animate__animated animate__fadeInUp">
                            <span className="subhead">About us</span>
                            <h2 className="title-section">The number #1 SEO Service Company</h2>
                            <div className="divider" />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                            <Link to="/about" className="btn btn-primary mt-3">Read More</Link>
                        </div>
                        <div className="col-lg-6 py-3 animate__animated animate__fadeInRight">
                            <div className="img-fluid py-3 text-center">
                                <img src={about_frame} alt="max" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
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
                                        <span className="mai-logo-chrome" />
                                    </div>
                                    <h5>Service 1</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-logo-firefox" />
                                    </div>
                                    <h5>Service 2</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-logo-safari" />
                                    </div>
                                    <h5>Service 3</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-logo-edge" />
                                    </div>
                                    <h5>Service 4</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-logo-google-playstore" />
                                    </div>
                                    <h5>Service 5</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-logo-apple-appstore" />
                                    </div>
                                    <h5>Service 6</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-logo-google" />
                                    </div>
                                    <h5>Service 7</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 animate__fadeIn">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-logo-yahoo" />
                                    </div>
                                    <h5>Service 8</h5>
                                    <p>We analyse your website's structure, internal architecture &amp; other key</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section banner-seo-check">
                    <div className="wrap bg-image" style={{ backgroundImage: `url(${bg_pattern})` }}>
                        <div className="container text-center">
                            <div className="row justify-content-center animate__animated animate__fadeInUp">
                                <div className="col-lg-8">
                                    <h2 className="mb-4">Check your Website SEO</h2>
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="E.g google.com" />
                                        <button type="submit" className="btn btn-success">Check Now</button>
                                    </form>
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
                <div className="page-section banner-info">
                    <div className="wrap bg-image" style={{ backgroundImage: `url(${bg_pattern})` }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 py-3 pr-lg-5 animate__animated animate__fadeInUp">
                                    <h2 className="title-section">SEO to Improve Brand <br /> Visibility</h2>
                                    <div className="divider" />
                                    <p>We're an experienced and talented team of passionate consultants who breathe with search engine marketing.</p>
                                    <ul className="theme-list theme-list-light text-white">
                                        <li>
                                            <div className="h5">SEO Content Strategy</div>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                        </li>
                                        <li>
                                            <div className="h5">B2B SEO</div>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 py-3 animate__animated animate__fadeInRight">
                                    <div className="img-fluid text-center">
                                        <img src={banner_image_2} alt="max" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section">
                    <div className="container">
                        <div className="text-center animate__animated animate__fadeInUp">
                            <div className="subhead">Our Blog</div>
                            <h2 className="title-section">Read Latest News</h2>
                            <div className="divider mx-auto" />
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-3 py-3 animate__animated animate__fadeInUp">
                                <div className="card-blog cardx"  style={{ backgroundImage: `url(${blog_1})` }}>
                                    <div className="card_content">
                                        <h3 className="card_title">Digital Tutorials</h3>
                                        <span className="card_subtitle">1 hour ago</span>
                                        <p className="card_description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-3 animate__animated animate__fadeInUp">
                                <div className="card-blog cardx"  style={{ backgroundImage: `url(${blog_2})` }}>
                                    <div className="card_content">
                                        <h3 className="card_title">SMM Tutorials</h3>
                                        <span className="card_subtitle">3 hour ago</span>
                                        <p className="card_description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-3 animate__animated animate__fadeInUp">
                                <div className="card-blog cardx"  style={{ backgroundImage: `url(${blog_3})` }}>
                                    <div className="card_content">
                                        <h3 className="card_title">SEO Tutorials</h3>
                                        <span className="card_subtitle">6 hour ago</span>
                                        <p className="card_description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-3 animate__animated animate__fadeInUp">
                                <div className="card-blog cardx"  style={{ backgroundImage: `url(${blog_4})` }}>
                                    <div className="card_content">
                                        <h3 className="card_title">ASO Tutorials</h3>
                                        <span className="card_subtitle">7 hour ago</span>
                                        <p className="card_description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
