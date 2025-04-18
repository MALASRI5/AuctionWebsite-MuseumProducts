import React from 'react';
import './reach.css';
import contactImage from './Reach-Us.jpg'; 

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-section">
                <div className="contact-right">
                    <h2>Contact Us</h2>
                    <p>
                        Thank you for showing interest in MuzeoLux. We appreciate your inquiries and feedback.
                        Please don't hesitate to reach out to us using the details provided below:
                    </p>
                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="*Full Name" required />
                            <input type="email" placeholder="*Email" required />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Phone Number" />
                            <select>
                                <option>Choose Department</option>
                                <option>Classic and Vintage Automobiles</option>
                                <option>Furniture and Decoratives Arts</option>
                                <option>Time Pieces</option>
                                <option>Numismatics</option>
                                <option>Fine Writing and Arts</option>
                                <option>Memorabilia</option>
                                <option>Private Estate Sale</option>
                                <option>Jewellery and Silver</option>
                                <option>Menuscripts and Rare Books</option>
                                <option>Contemporary Indian Arts</option>
                                <option>Indian Antiques</option>
                                <option>Textile</option>
                                <option>Science and Natural History</option>
                                <option>International Arts</option>
                            </select>
                        </div>
                        <textarea placeholder="Type your query here" rows={4}></textarea>
                        <button type="submit" className='button'>SUBMIT</button>
                    </form>
                    <div className="contact-details">
                        <div className="detail">
                            <i className="fas fa-phone-alt"></i>
                            <span>+91 9600 8056 73</span>
                        </div>
                        <div className="detail">
                            <i className="fas fa-envelope"></i>
                            <span>yazhinipandian.muzeolux@gmail.com</span>
                        </div>
                    </div>
                    
                </div>
                <div className="contact-left">
                        <img src={contactImage} alt="MuzeoLux Contact" />
                    </div>
            </div>
        </div>
    );
};

export default Contact;
