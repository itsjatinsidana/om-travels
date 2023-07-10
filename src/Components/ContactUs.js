import {PublicNavbar} from "./PublicNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useRef} from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {

    const contactForm = useRef();
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');
    //
    // function sendMessage(e) {
    //     e.preventDefault();
    //     axios.post('http://localhost:3000/send-message', {
    //         name,
    //         phone,
    //         email,
    //         subject,
    //         message
    //     }).then(res=>{
    //        console.log(res.data);
    //        if(res.data==='success'){
    //            Swal.fire('Message Sent!','','success');
    //            document.getElementById('messageForm').reset();
    //        }
    //     });
    // }

    function sendMessage(e) {
        e.preventDefault();

        emailjs.sendForm('service_8y8zj4v', 'template_0r3yh4k', contactForm.current, 'EISmm_IofXATgdJ_e')
            .then((result) => {
                console.log(result.text);
                Swal.fire('Message Sent!','','success');
                document.getElementById('messageForm').reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <PublicNavbar/>
            <BreadCrumb pageName="Contact Us!"/>
            {/*Contact Form*/}
            <section className="w3l-contact" id="contact">
                <div className="contact-infubd py-5">
                    <div className="container py-lg-3">
                        <div className="contact-grids row">
                            <div className="col-lg-6 contact-left">
                                <div className="partners">
                                    <div className="cont-details">
                                        <h5>Get in touch</h5>
                                        <p className="mt-3 mb-4">Hi there, We are available 24/7 by fax, e-mail or by phone. Drop us line so we can talk
                                            futher about that.</p>
                                    </div>
                                    <div className="hours">
                                        <h6 className="mt-4">Email:</h6>
                                        <p> <a href="">
                                            travelsom9@gmail.com</a></p>
                                        <h6 className="mt-4">Visit Us:</h6>
                                        <p> Logarh,Near Durgiana Mandir,Amritsar</p>
                                        <h6 className="mt-4">Contact:</h6>
                                        <p className="margin-top"><a href="">9501616217<br/>7347467548</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
                                <form  id="messageForm" ref={contactForm} onSubmit={sendMessage}>
                                    <div className="input-grids">
                                        <div className="form-group">
                                            <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*" className="contact-input"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="mobile" name="w3lSenderPhone" id="w3lSender" placeholder="Your Phone Number*" className="contact-input" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*" className="contact-input" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="w3lSubject" id="w3lSubect" placeholder="Subject*" className="contact-input"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*" required defaultValue={""}/>
                                    </div>
                                    <div className="text-right">
                                        <button className="btn btn-style btn-primary" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="map mt-5 pt-md-5">
                            <h5>Map</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54352.139038624446!2d74.83510087532802!3d31.633612449909762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1655795480493!5m2!1sen!2sin" style={{border: 0}} allowFullScreen />
                        </div>
                    </div>
                </div></section>
            {/*/Contact Form*/}
            <Footer/>
        </>
    )
}