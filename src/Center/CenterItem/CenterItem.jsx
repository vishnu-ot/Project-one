import React from "react";
import "./CenterItem.css";
function CenterItem({item}) {
    const {name ,img}=item
    console.log(img, "ddddd");
  return (
    <div className="center-item">
      <div className="profile">
        <img src="profilepic1.png" alt="" />
        <div className="name-sec">
          <h3>{name}</h3>
          <p>@wallArt</p>
        </div>
      </div>
      <div className="content-sec">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <span style={{ color: "red" }}>Read More</span>
        </p>
        <img
          src={img}
          alt=""
          style={{ marginTop: "30px", width: "606px", height: "306px" }}
        />
        <div className="comment-sec">
          <img src="heart.png" alt="" /> <span>9.8K</span>
          <img src="comment.png" alt="" /><span>7.8K</span>
          <img src="share.png" alt="" /><span>8.9K</span>
        </div>
      </div>
    </div>
  );
}

export default CenterItem;
