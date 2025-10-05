import React from "react";
import "./Label.component.css";
import { Link } from "react-router-dom";

import photo1 from "../../photos/photo1.png";
import photo2 from "../../photos/photo2.png";
import photo3 from "../../photos/photo3.png";
import photo4 from "../../photos/photo4.png";
import photo5 from "../../photos/photo5.png";
import photo6 from "../../photos/photo6.png";
import photo7 from "../../photos/photo7.png";
import photo8 from "../../photos/photo8.png";
import photo9 from "../../photos/photo9.png";
import photo10 from "../../photos/photo10.png";

const Label = () => {
  return (
    <div className="photo-label" data-content="...">
      <div className="photo-item1">
        <Link to="/StoreProfile/"><img src={photo1} alt="1" /></Link>
      </div>
      <div className="photo-item2">
        <Link to="/profile/2"><img src={photo2} alt="2" /></Link>
      </div>
      <div className="photo-item3">
        <Link to="/profile/3"><img src={photo3} alt="3" /></Link>
      </div>
      <div className="photo-item4">
        <Link to="/profile/4"><img src={photo4} alt="4" /></Link>
      </div>
      <div className="photo-item5">
        <Link to="/profile/5"><img src={photo5} alt="5" /></Link>
      </div>
      <div className="photo-item6">
        <Link to="/profile/6"><img src={photo6} alt="6" /></Link>
      </div>
      <div className="photo-item7">
        <Link to="/profile/7"><img src={photo7} alt="7" /></Link>
      </div>
      <div className="photo-item8">
        <Link to="/profile/8"><img src={photo8} alt="8" /></Link>
      </div>
      <div className="photo-item9">
        <Link to="/profile/9"><img src={photo9} alt="9" /></Link>
      </div>
      <div className="photo-item10">
        <Link to="/profile/10"><img src={photo10} alt="10" /></Link>
      </div>
    </div>
  );
};

export default Label;