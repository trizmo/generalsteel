import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import Breadcrumb from "../elements/common/Breadcrumb";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";


class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Gallery' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Gallery'} />
                {/* End Breadcrump Area */}


                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">Our Projects</h2>
                                        <p>Schools to Stadiums, we have projects available for your viewing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More Project</span></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer />
            </React.Fragment>
        )
    }
}
export default Portfolio;