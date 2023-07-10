import {PublicNavbar} from "./PublicNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
// import {useState} from "react";
// import axios from "axios";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';
import {useRef} from "react";

export const BookTickets = () => {
    const form = useRef();
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [country, setCountry] = useState('');
    // const [ticketType, setTicketType] = useState('');
    // const [leavingFrom, setLeavingFrom] = useState('');
    // const [goingTo, setGoingTo] = useState('');
    // const [departureDate, setDepartureDate] = useState('');
    // const [returnDate, setReturnDate] = useState('');
    // const [adultPassengers, setAdultPassengers] = useState('');
    // const [childPassengers, setChildPassengers] = useState('');
    // const [transportType, setTransportType] = useState('');
    // const [requirements, setRequirements] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8y8zj4v', 'template_7t97o7o', form.current, 'EISmm_IofXATgdJ_e')
            .then((result) => {
                console.log(result.text);
                Swal.fire('Booking Request Sent!','','success');
                            document.getElementById('ticketForm').reset();
            }, (error) => {
                console.log(error.text);
            });
    }


    // function handleTicketForm(e){
    //     e.preventDefault();
    //     axios.post('http://localhost:3000/ticket-booking',{
    //         name,
    //         phone,
    //         email,
    //         address,
    //         city,
    //         country,
    //         ticketType,
    //         leavingFrom,
    //         goingTo,
    //         departureDate,
    //         returnDate,
    //         adultPassengers,
    //         childPassengers,
    //         transportType,
    //         requirements
    //
    //     }).then(res=>{
    //         console.log(res.data);
    //         if(res.data==='success'){
    //             Swal.fire('Booking Request Sent!','','success');
    //             document.getElementById('ticketForm').reset();
    //         }
    //     })
    // }
    return (
        <>
            <PublicNavbar/>
            <BreadCrumb pageName="Ticket Booking"/>
            {/*Ticket Booking Form*/}
            <div className="container my-5 p-5">
                <h1>Book your tickets</h1>
                <form className="mt-5 bg-light p-5 rounded-lg" id={'ticketForm'} onSubmit={sendEmail} ref={form}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="form6Example1" className="form-control" name="cust_name"/>
                                <label className="form-label" htmlFor="form6Example1">Your Name</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input type="number" id="form6Example6" className="form-control" name="cust_phone" />
                                <label className="form-label" htmlFor="form6Example6">Phone</label>
                            </div>
                        </div>
                    </div>
                    {/* Text input */}
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <input type="email" id="form6Example5" className="form-control" name="cust_email"/>
                                <label className="form-label" htmlFor="form6Example5">Email</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <input type="text" id="form6Example4" className="form-control" name="cust_address"/>
                                <label className="form-label" htmlFor="form6Example4">Address</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <input type="text" id="form6Example5" className="form-control" name="cust_city"/>
                                <label className="form-label" htmlFor="form6Example5">City</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <input type="text" id="form6Example4" className="form-control" name="cust_country"/>
                                <label className="form-label" htmlFor="form6Example4">Country</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <select className="custom-select" name="ticketType-select" id="ticketType-select" name="cust_ticketType">
                                    <option value="">Select Ticket Type</option>
                                    <option value="Railway">Railway Ticket</option>
                                    <option value="Flight">Airline Ticket</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <input type="text" id="form6Example4" className="form-control" name="cust_leavingFrom"/>
                                <label className="form-label" htmlFor="form6Example4">Leaving from</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <input type="text" id="form6Example5" className="form-control" name="cust_goingTo"/>
                                <label className="form-label" htmlFor="form6Example5">Going to</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <input type="date" id="form6Example4" className="form-control" name="cust_depDate"/>
                                <label className="form-label" htmlFor="form6Example4">Departure Date</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="form-outline mb-4">
                                <input type="date" id="form6Example5" className="form-control" name="cust_retDate"/>
                                <label className="form-label" htmlFor="form6Example5">Return Date(Optional)</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-outline mb-4">
                                <select className={"custom-select"} id="adults" name="cust_adPass">
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </select>
                                <label className="form-label" htmlFor="form6Example4">Adults Passengers</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-outline mb-4">
                                <select className={"custom-select"} id="children" name="cust_chPass">
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </select>
                                <label className="form-label" htmlFor="form6Example4">Children Passengers</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <select className="custom-select" id="transportType" name="cust_transType">
                            <option value="">Select Transport Type...</option>
                            <option value="Air-Conditioned">Air-Conditioned</option>
                            <option value="Non-Air-Conditioned">Non Air-Conditioned</option>
                        </select>
                        <label className="form-label" htmlFor="form6Example5">Transport Type</label>
                    </div>
                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="requirements" rows={5} name="cust_req"/>
                        <label className="form-label" htmlFor="form6Example4">Describe Your Requirements</label>
                    </div>
                    {/* Submit button */}
                    <button type="submit" value="Send" className="btn btn-primary btn-block mb-4">Submit</button>
                </form>
            </div>
            {/*/Ticket Booking Form*/}
            {/*Contact us!*/}
            <section className="w3l-statshny py-5" id="stats">
                <div className="container py-lg-5 py-md-4">
                    <div className="w3-stats-inner-info">
                        <div className="row">
                            <div className="col-lg-6 content-6-left pr-lg-5">
                                <h6 className="sub-title" style={{color: "#FF1654FF"}}>Have any questions?</h6>
                                <h3 className="hny-title text-white">Contact Us!</h3>
                            </div>
                            <div className="col-lg-6 content-6-right mt-lg-0 mt-4">
                                <p className="mb-3 text-light">By investing in technology that takes the friction out of travel, Om Travels seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay in Amritsar, and much more.</p>
                                <p className="mb-3 text-light">We delivers the best inventory of Flights, Railways, Hotels and Holiday Packages in India. We uses the best technology platform that makes it incredibly easy for customers to use our services. And we are making it better everyday. We also provides the less cost compared to any other Travel Agency.</p>
                                <Link to={'/contact-us'}><a href="#" className="btn btn-style btn-primary mt-4">Get In Touch!</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/Contact us!*/}
            <Footer/>
        </>
    )
}