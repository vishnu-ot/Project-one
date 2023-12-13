import React from "react";

import "./Rightsidephoto.css";

function Rightsidephoto() {
  return (
    <div className="rightphoto">
      <img src="firstright.png" />
      
      <div className="inside">
        <div className="pic">
        <img src="firstinside.png" />
        <span style={{ color: "white" }}> Edward</span>
        </div>
      </div>
    </div>
  );
}

export default Rightsidephoto;
