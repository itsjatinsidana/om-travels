import {Link} from "react-router-dom";

export const PublicNavbar = () => {
    return(
        <>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke">
                        <h1><Link to={'/'}><a className="navbar-brand mr-lg-5" href="#">
                            <br/>
                            OM TRAVELS <br/>
                            
                        </a></Link></h1>
                        {/* if logo is image enable this
      <a class="navbar-brand" href="#index.html">
          <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
      </a> */}
                        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                            <span className="navbar-toggler-icon fa icon-close fa-times" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active px-4">
                                    <Link to={'/'}><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link to={'/ticket-booking'}><a className="nav-link" href="#">Book Tickets</a></Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link to={'/packages'}><a className="nav-link" href="#">Packages</a></Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link to={'/contact-us'}><a className="nav-link" href="#">Contact</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-lg-block d-none">
                            <Link to={'/contact-us'}><a href="#" className="btn btn-style btn-secondary">Get In Touch</a></Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}