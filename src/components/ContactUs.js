import React from 'react';
import './../css/jumbotron.css';

const ContactPage = () => {
  return (
    <div className="container contact-container">
      <h1 className="text-center my-3">Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
        You can contact us using the information provided below or use the contact form to send us a message.
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> letscode@gmail.com</p>
        <p><strong>Phone:</strong> +91 1238776655</p>
        <p><strong>Address:</strong> ABC road, Pune, Maharashtra, India</p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
