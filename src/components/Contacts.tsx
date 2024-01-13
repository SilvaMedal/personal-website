import "../styles/Contacts.css";

const Contacts = () => {
  return (
    <div id="contact" className="section">
      <h3>Contact Me</h3>

      <ul className="contact-links">
        <li>
          <a href="https://github.com/SilvaMedal" target="_blank">
            <img src="./github.png" className="contact-logo" alt="logo" />
            GitHub
          </a>
        </li>

        <li>
          <a href="mailto:anthony@silvamedal.com">
            <img src="./email.png" className="contact-logo" alt="logo" />
            Email
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/silva-medal" target="_blank">
            <img src="./linkedin.png" className="contact-logo" alt="logo" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
