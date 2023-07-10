import {Link} from "react-router-dom";

export const BreadCrumb = (props) => {
    return (
        <>
            <section className="w3l-about-breadcrumb text-left">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">{props.pageName}</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li><Link to={'/'}>Home</Link></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true" /> {props.pageName} </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}