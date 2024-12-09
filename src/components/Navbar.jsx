import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classes from "./css/Navbar.module.css";

const Navbar = ({ home, size }) => {
  const navigate = useNavigate();
  const [mobilemain, setMobilemain] = useState(false);

  return (
    <div>
      {home ? (
        <div className={classes.home}>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={classes.homelogo}
          ></div>
          {size ? (
            <div className={classes.homemain}>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About Me</Link>
              <Link to="/contact">Contact Me</Link>
            </div>
          ) : (
            <div className={classes.navmob}>
              <button onClick={() => setMobilemain(!mobilemain)}>
                <FontAwesomeIcon icon={faBars} size="4x" />
              </button>
              {mobilemain && (
                <div className={classes.mobilemain}>
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/about">About Me</Link>
                  <Link to="/contact">Contact Me</Link>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className={classes.nav}>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={classes.navlogo}
          ></div>
          {size ? (
            <div className={classes.navmain}>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About Me</Link>
              <Link to="/contact">Contact Me</Link>
            </div>
          ) : (
            <div className={classes.navmob2}>
              <button onClick={() => setMobilemain(!mobilemain)}>
                <FontAwesomeIcon icon={faBars} size="4x" />
              </button>
              {mobilemain && (
                <div className={classes.mobilemain}>
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/about">About Me</Link>
                  <Link to="/contact">Contact Me</Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
