import {PublicNavbar} from "./PublicNavbar";
import {Banner} from "./Banner";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";


export const Home = () => {
    return(
        <>
            <PublicNavbar/>
            <div className="mt-5 p-1" style={{color: "white"}}>

            </div>
            <Banner/>
            {/*About*/}
            <section className="w3l-cta4 py-5">
                <div className="container py-lg-5">
                    <div className="ab-section text-center">
                        <h6 className="sub-title">About Us</h6>
                        <h3 className="hny-title">Travel to make memories all around the India.</h3>
                        <p className="py-3 mb-3">By investing in technology that takes the friction out of travel, Om Travels seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay in Amritsar, and much more.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-9 mx-auto">
                            <img src="assets/images/golden.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/*/About*/}
            {/*Divider*/}
            <section className="w3l-content-6 py-5">
                <div className="container py-lg-5">
                    <div className="row">
                        <div className="col-lg-6 content-6-left pr-lg-5">
                            <h6 className="sub-title">Why Choose Us</h6>
                            <h3 className="hny-title">Life begins at the end of your comfort zone.</h3>
                        </div>
                        <div className="col-lg-6 content-6-right mt-lg-0 mt-4">
                            <p className="mb-3"><br/>
                                <br/>
                                Best Prices<br/>
                                100% Reliability<br/>
                                Quick Responce<br/>
                                Friendly Support
                            </p>
                            <p className="mb-3">We delivers the best inventory of Flights, Railways, Hotels and Holiday Packages in India. We uses the best technology platform that makes it incredibly easy for customers to use our services. And we are making it better everyday. We also provides the less cost compared to any other Travel Agency..</p>

                        </div>
                    </div>
                </div>
            </section>
            {/*/Divider*/}
            {/*Options*/}
            <section className="w3l-grids1">
                <div className="hny-three-grids py-5">
                    <div className="container py-lg-5">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 mt-0 grids5-info">
                                <Link to={'/ticket-booking'}><a href="#"><img src="assets/images/booknow.jpg" className="img-fluid" alt="" /></a></Link>
                                <h5>Flights & Trains</h5>
                                <h4><Link to={'/ticket-booking'}><a href="#">Book Tickets Now!</a></Link></h4>

                            </div>
                            <div className="col-md-4 col-sm-6 mt-sm-0 mt-5 grids5-info">
                                <Link to={'/packages'}><a href="#"><img src="assets/images/newasr.jpg" className="img-fluid" alt="" /></a></Link>
                                <h5>Packages</h5>
                                <h4><Link to={'/packages'}><a href="#">
                                    Discover Our Packages!</a></Link></h4>

                            </div>
                            <div className="col-md-4 col-sm-6 mt-md-0 mt-5 grids5-info">
                                <Link to={'/contact-us'}><a href="#"><img src="assets/images/IMG55.jpg" className="img-fluid" alt="" /></a></Link>
                                <h5>Contact Us</h5>
                                <h4><Link to={'/contact-us'}><a href="#">Get In Touch!</a></Link></h4>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/Options*/}
            <Footer/>
        </>
    )
}