import {PublicNavbar} from "./PublicNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";

export const Packages = () => {
    return (
        <>
            <PublicNavbar/>
            <BreadCrumb pageName={"Packages"}/>
            <section className="w3l-cta4 py-5">
                <div className="container py-lg-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card card-cascade mb-5">
                                <div className="view view-cascade overlay">
                                    <img className="card-img-top" src="assets\images\Packages\AMRITSAR.jpg" alt="Card image cap" height={'500px'}/>
                                </div>
                                {/* Card content */}
                                <div className="card-body card-body-cascade text-center" style={{height:"150px"}}>
                                    {/* Title */}
                                    <h4 className="card-title"><strong>Trip To Amritsar</strong></h4>
                                    {/* Subtitle */}
                                    <h6 className="font-weight-bold text-success py-2">Contact For More Details!</h6>
                                    {/* Text */}
                                    <p className="card-text">Phone no.  9501661217
                                    </p><br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-cascade mb-5">
                                <div className="view view-cascade overlay">
                                    <img className="card-img-top" src="assets\images\Packages\img2.jpg" alt="Card image cap" height={'500px'}/>
                                </div>
                                {/* Card content */}
                                <div className="card-body card-body-cascade text-center" style={{height:"150px"}}>
                                    {/* Title */}
                                    <h4 className="card-title"><strong>Taxi For Full Day</strong></h4>
                                    {/* Subtitle */}
                                    <h6 className="font-weight-bold text-success py-2">Contact For More Details!</h6>
                                    {/* Text */}
                                    <p className="card-text">Phone no.  9501661217
                                    </p><br/>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-4">*/}
                        {/*    <div className="card card-cascade mb-5">*/}
                        {/*        <div className="view view-cascade overlay">*/}
                        {/*            <img className="card-img-top" src="assets\images\Packages\ASR_PACKAGE.png" alt="Card image cap" height={'500px'}/>*/}
                        {/*        </div>*/}
                        {/*        /!* Card content *!/*/}
                        {/*        <div className="card-body card-body-cascade text-center" style={{height:"150px"}}>*/}
                        {/*            /!* Title *!/*/}
                        {/*            <h4 className="card-title"><strong>Trip To Amritsar</strong></h4>*/}
                        {/*            /!* Subtitle *!/*/}
                        {/*            <h6 className="font-weight-bold text-success py-2">Contact For More Details!</h6>*/}
                        {/*            /!* Text *!/*/}
                        {/*            <p className="card-text">Phone no. 9999999999*/}
                        {/*            </p><br/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}