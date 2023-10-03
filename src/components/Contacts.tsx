const Contacts = () => {
  return (
    <div id="contact" className="section">
      <ul className="contact-links">
        <li>
          <a href="https://github.com/SilvaMedal" target="_blank">
            <img src="./github.png" className="contact-logo" alt="logo" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/silva-medal" target="_blank">
            <img src="./linkedin.png" className="contact-logo" alt="logo" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="">
            <img src="./email.png" className="contact-logo" alt="logo" />
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
