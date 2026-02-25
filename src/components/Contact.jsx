import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-label">04 — Contact</div>
      <h2>Let's Connect</h2>
      <p className="contact-sub">
        I'm open to internships, collaborations, and new opportunities.
      </p>
      <div className="contact-links">
        <a href="mailto:sohan@example.com" className="contact-btn">
          sohan@example.com
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;