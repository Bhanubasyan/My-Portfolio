import { useRef, useState } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wb0ii3j",
        "template_3s6n2wm",
        form.current,
        "2GQcsjttVMmm-pC38"
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          form.current.reset();
        },
        () => {
          setLoading(false);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <p className="section-kicker">Contact</p>
      <h2 className="contact-title">Let us build something useful</h2>
      <p className="section-lead">
        Have an opportunity, collaboration, or project idea? Send the details and I will
        get back with a clear next step.
      </p>

      <div className="contact-layout">
        <aside className="contact-aside">
          <h3>Open to frontend and full-stack project work.</h3>
          <p>
            I am interested in React interfaces, dashboards, product pages, API-connected
            applications, and practical tools that solve real problems.
          </p>
          <div className="contact-points">
            <span><Mail size={18} /> bhanubasyan@gmail.com</span>
            <span><MapPin size={18} /> Haridwar, Uttarakhand, India</span>
          </div>
        </aside>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="animal-container">
            <div className="animal">
              {submitted ? "Message sent successfully." : "Tell me about your project."}
            </div>
          </div>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="contact_number" placeholder="Contact Number" required />
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            required
          />
          <button type="submit" disabled={loading}>
            <Send size={18} /> {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {submitted && (
        <div className="popup">
          <p>Message sent successfully. Bhanu will reply soon.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
