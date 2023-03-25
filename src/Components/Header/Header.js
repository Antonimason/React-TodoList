import React from 'react';
import "./Header.css";
import {TiSocialFacebook} from 'react-icons/ti';
import {IoLogoInstagram} from 'react-icons/io';
import {TiSocialLinkedin} from 'react-icons/ti';
import {AiOutlineGithub} from 'react-icons/ai';

function Header() {
  return (
    <div className="header-container">
      <div id="title">
        <h1>Task App</h1>
      </div>
      <div id="social-media">
        <a><TiSocialFacebook /></a>
        <a><IoLogoInstagram /></a>
        <a><TiSocialLinkedin /></a>
        <a><AiOutlineGithub/></a>
      </div>
    </div>
  );
}
export default Header;