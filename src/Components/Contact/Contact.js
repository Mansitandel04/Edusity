import React from "react";
import "./Contact.css";
import Title from "../Title/Title";
import msg_icon from "../../assetes/msg-icon.png";
import mail_icon from "../../assetes/mail-icon.png";
import phone_icon from "../../assetes/phone-icon.png";
import location_icon from "../../assetes/location-icon.png";

const Contact = () => {
 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "395c91f0-b9bd-4ae4-b8f9-4b2a4f3b07e3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container">
      <Title subtitle="CONTACT US" title="Get in touch" />
      <div className="contact">
        <div className="contact-col">
          <h2>
            Send us a message <img src={msg_icon} alt="msg" />
          </h2>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
             
              <img src={mail_icon} alt="msg" /> Contact@GreatStack.dev
            </li>
            <li>
              <img src={phone_icon} alt="msg" /> +1 123-456-7890
            </li>
            <li>
              <img src={location_icon} alt="msg" /> 77 Massachusetts Ave, Cambridge
              MA 02139, United States
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input placeholder="Enter Your Name"  name="name" type="text" required/>
             <label>Phone Number</label>
            <input placeholder="Enter Your  Mobile Number"  name="phone" type="tel" required/>
             <label>Email </label>
            <input placeholder="Enter Your Email address"  name="Email" type="email" required/>
             <label>Write Your message Here!</label>
            <textarea placeholder="Enter Your Text"   rows="6" cols="35" name="message" required/>
            <button type="submit" className="btn dark-btn" >Submit Now <i className="fa-solid fa-arrow-right"></i></button>
          </form>
<span>{result}</span>        </div>
      </div>
    </div>
  );
};
export default Contact;
