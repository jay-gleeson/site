export default function Contact() {
  return (
    <div className="container">
      <div className="main-frame">
        <div className="content">
          <h1 className="title">Contact Me</h1>
          <div className="card description">
            <p>Contact me through the following mediums:</p>
            <br />
            <p>
              Email:{" "}
              <a href="mailto:placeholder@site.dev">placeholder@site.dev</a>
            </p>
            <br />
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/jay-glee"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/jay-glee
              </a>
            </p>
            <br />
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/jay-gleeson"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/jay-gleeson
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
