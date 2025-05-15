export default function Contact() {
  return (
    <div className="container">
      <div className="main-frame">
        <div className="content">
          <h1 className="title">Contact Me</h1>
          <div className="card description">
            <h2>Get in Touch</h2>
            <p>I' always have ideas worth sharing with others to create awesome projects! Feel free to reach out through any of the following channels:</p>
            <br />
            
            <div className="contact-section">
              <h3>📧 Email</h3>
              <p>
                For professional inquiries:{" "}
                <a href="mailto:placeholder@site.dev">placeholder@site.dev</a>
              </p>
              <p className="note">Thank you for your patience as I implement this feature.</p>
            </div>
            <br />
            
            <div className="contact-section">
              <h3>💼 LinkedIn</h3>
              <p>
                Connect with me professionally:{" "}
                <a
                  href="https://www.linkedin.com/in/jay-glee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/jay-glee
                </a>
              </p>
              <p className="note">Feel free to send me a connection request with a personalized message!</p>
            </div>
            <br />
            
            <div className="contact-section">
              <h3>👨‍💻 GitHub</h3>
              <p>
                Check out my projects and contributions:{" "}
                <a
                  href="https://github.com/jay-gleeson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/jay-gleeson
                </a>
              </p>
              <p className="note">I'm always open to collaboration on interesting projects!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
