import "./App.css";
import React from "react";
import fboot from "./fboot.jpg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Soccer Kits</h1>
      <br />
      <img src={fboot} class="image" />
      <br />
      <img src="/sb.jpg" class="image" /> <br />
      <video width="350" height="400" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
