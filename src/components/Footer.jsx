import React from "react";
import classes from "./css/Footer.module.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h2 className={classes.heading}>CONTACT</h2>

      <div className={classes.container}>
        <div className={classes.left}>
          <h3 className={classes.subHeading}>Drop Me a Message</h3>
          <p className={classes.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>

          <div className={classes.contactItem}>
            <div className={classes.iconBox}>📞</div>
            <span>+1 123456789</span>
          </div>
          <div className={classes.contactItem}>
            <div className={classes.iconBox}>📧</div>
            <span>LakshayKumar@gmail.com</span>
          </div>
          <div className={classes.contactItem}>
            <div className={classes.iconBox}>📍</div>
            <span>House No: 07 Model Town, Delhi, India</span>
          </div>
        </div>

        <div className={classes.right}>
          <input type="text" placeholder="Name" className={classes.input} />
          <input type="email" placeholder="Email" className={classes.input} />
          <textarea
            placeholder="Message"
            className={classes.textarea}
          ></textarea>
          <button className={classes.button}>Send</button>
          <a href="/CV.pdf" download>
            <button className={classes.button}>Download CV</button>
          </a>
        </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.logo}>LK</div>
        <p className={classes.copyright}>
          2025 – Lakshay Kumar, All rights reserved
        </p>
        <div className={classes.socials}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
