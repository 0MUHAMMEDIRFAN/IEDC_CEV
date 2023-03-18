import React from 'react'
import "./Contact.css"
import { useForm } from "../../Hooks/Form.js"

function Contact() {
    const [value, handleChange] = useForm({
        fullname: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault()
        handleChange();
        alert("Message Sent")
    }
    return (
        <div className='contact'>
            <div className="text">
                <h1>Contact Us</h1>
                <h5>we are here to help you</h5>
            </div>
            <form className="contactForm" onSubmit={handleSubmit} autoComplete="off">
                <h2>Contact Form</h2>
                <div>
                    <input type="text" name="fullname" required onChange={handleChange} value={value.fullname} />
                    <p>Full Name</p>
                </div>
                <div>
                    <input type="email" name="email" required onChange={handleChange} value={value.email} />
                    <p>Email Address</p>
                </div>
                <div>
                    <input type="text" name="phone" required onChange={handleChange} value={value.phone} pattern="[0-9]+" title='Only Numbers allowed'/>
                    <p>Phone Number</p>
                </div>
                <div>
                    <textarea type="text" name="message" required onChange={handleChange} value={value.message} className="message" />
                    <p>Message</p>
                </div>
                    <button>SEND</button>
            </form>
        </div>
    )
}

export default Contact
