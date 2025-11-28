import React, { useState, useRef } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [coverEyes, setCoverEyes] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const form = useRef();

  const handleMessageChange = (e) => {
    setCoverEyes(e.target.value.length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    emailjs
      .sendForm(
        "service_wb0ii3j",
        "template_3s6n2wm",
        form.current,
        "2GQcsjttVMmm-pC38"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setLoading(false); // stop loading
          form.current.reset(); // clear the form
        },
        (error) => {
          console.log(error.text);
          setLoading(false); // stop loading
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      {/* Mascot */}
      <div className="animal-container">
        {!submitted ? (
          <div className={`animal ${coverEyes ? "cover-eyes" : ""}`}>🐵</div>
        ) : (
          <div className="animal thankyou">
            🙈 Thank you! Bhanu will reply soon 😊
          </div>
        )}
      </div>

      {/* Contact Form */}
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="contact_number" placeholder="Contact Number" required />
        <textarea
          name="message"
          placeholder="Write your message..."
          rows="4"
          onChange={handleMessageChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Optional popup animation */}
      {submitted && (
        <div className="popup">
          <p>🎉 Message sent successfully! Bhanu will reply soon 😊</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
