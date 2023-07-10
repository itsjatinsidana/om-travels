import {Link} from "react-router-dom";


export const Footer = () => {
    return (
        <>
            <footer>
                {/* footer */}
                <section className="w3l-footer">
                    <div className="w3l-footer-16-main py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 column">
                                    <div className="row">
                                        <div className="col-md-4 column">
                                            <h3>Company</h3>
                                            <ul className="footer-gd-16">
                                                <li><Link to={'/'}><a href="#">Home</a></Link></li>
                                                <li><Link to={'/ticket-booking'}><a href="#">Book Tickets</a></Link></li>
                                                <li><Link to={'/packages'}><a href="#">Packages</a></Link></li>
                                                <li><Link to={'/contact-us'}><a href="#">Contact Us</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 column pl-lg-5 column4 mt-lg-0 mt-5">
                                    <h3>OM TRAVELS</h3>

                                        <img src="assets/images/OM.jpg" alt="logo" height={"200px"} width={"200px"}/>

                                </div>
                            </div>
                            <div className="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                                <div className="columns-2 mt-lg-0 mt-3">
                                    <ul className="social">
                                        <li><a href="#facebook"><span className="fa fa-facebook" aria-hidden="true"/></a>
                                        </li>
                                        <li><a href="#linkedin"><span className="fa fa-linkedin" aria-hidden="true"/></a>
                                        </li>
                                        <li><a href="#twitter"><span className="fa fa-twitter" aria-hidden="true"/></a>
                                        </li>
                                        <li><a href="#google"><span className="fa fa-google-plus" aria-hidden="true"/></a>
                                        </li>
                                        <li><a href="#github"><span className="fa fa-github" aria-hidden="true"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* //footer */}
            </footer>
        </>
    )
}