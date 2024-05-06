import React, { useState } from "react";
import {
  logo,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
} from "../../assets/index";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div id="sidebar">
      <div className="wrapper">
        <a href="/">
          <img className="logo" src={logo} alt="" />
        </a>
        <div className="items">
          <a href="">
            <img src={icon1} alt="" />
          </a>
          <a href="">
            <img src={icon2} alt="" />
          </a>
          <a href="">
            <img src={icon3} alt="" />
          </a>
          <a href="">
            <img src={icon4} alt="" />
          </a>
          <a className="tab" href="">
            <img src={icon5} alt="" />
          </a>
          <a href="">
            <img src={icon6} alt="" />
          </a>
          <a href="">
            <img src={icon7} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
