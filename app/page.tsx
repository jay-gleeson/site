export default function Page() {
  return (
    <div className="container">
      <div className="main-frame">
        <div className="sidebar">
          <img
            className="profile-pic"
            src="profile.jpg"
            alt="Profile"
          />
          <div className="tab">Profile</div>
          <div className="tab">Background</div>
          <div className="tab">Projects</div>
          <div className="tab">Socials</div>
        </div>
        <div className="content">
          <h1 className="title">Home Page</h1>
          <div className="description">
            Welcome to my site! Please be patient, it will arrive soon enough.
          </div>
        </div>
      </div>
    </div>
  );
}
