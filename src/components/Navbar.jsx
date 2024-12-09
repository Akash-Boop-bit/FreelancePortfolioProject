import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./css/Navbar.module.css";

const Navbar = ({ home }) => {
  const navigate = useNavigate();
  const [size, setSize] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setSize(false);
    }
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
      setSize(false);
    } else {
      setSize(true);
    }
  });

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
            <div>
              <div>
                {/* <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact Me</Link> */}
              </div>
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
          <div className={classes.navmain}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact Me</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
