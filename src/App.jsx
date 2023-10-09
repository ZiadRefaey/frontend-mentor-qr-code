import "./App.css";
import QR from "./assets/image-qr-code.png";
function App() {
  return (
    <>
      <div className="app-container">
        <div className="img-container">
          <img src={QR} alt="QR code image" />
        </div>
        <div className="app-content">
          <h1 className="content-header">
            Improve your front-end skills by building projects
          </h1>
          <p className="content-text">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
