import React, { useEffect, useRef, useState } from "react";
import classes from "./css/AboutMe.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import Logo2 from "./Logo2";
import About from "./About";

gsap.registerPlugin(useGSAP);

const AboutMe = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1600);
  }, []);

  useGSAP(
    () => {
      let tl = gsap.timeline({});
      tl.to(
        "#circle",
        {
          duration: 10,
          repeat: -1,
          rotate: 360,
          ease: "none",
        },
        0
      );
      tl.to(
        "#circle1",
        {
          duration: 10,
          repeat: -1,
          rotate: 360,
          ease: "none",
        },
        1
      );
      tl.to(
        "#circle2",
        {
          duration: 10,
          repeat: -1,
          rotate: 360,
          ease: "none",
        },
        2
      );
      tl.to(
        "#circle3",
        {
          duration: 10,
          repeat: -1,
          rotate: 360,
          ease: "none",
        },
        3
      );
      tl.to(
        "#circle4",
        {
          duration: 10,
          repeat: -1,
          rotate: 360,
          ease: "none",
        },
        4
      );

      tl.set(
        "#about",
        {
          x: 1000,
          opacity: 0,
        },
        1.5
      );
      tl.set(
        "#aboutme",
        {
          x: -1000,
          opacity: 0,
        },
        1.5
      );
      tl.to(
        "#about, #aboutme",
        {
          x: 0,
          opacity: 1,
          duration: 2,
        },
        1.5
      );
    },
    { scope: "#box" }
  );

  return (
    <>
      {!render ? (
        <Logo2 />
      ) : (
        <div>
          <Navbar home={false} />
        </div>
      )}
      <div className={classes.background}>
        <div className={classes.main} id="box">
          <span style={{ opacity: 0 }} id="about">
            About
          </span>
          <h1 style={{ opacity: 0 }} id="about">
            About Me
          </h1>

          <div>
            <div className={classes.circle} id="circle"></div>
            <div className={classes.circle} id="circle1"></div>
            <div className={classes.circle} id="circle2"></div>
            <div className={classes.circle} id="circle3"></div>
            <div className={classes.circle} id="circle4"></div>
          </div>
          <div>
            <div className={classes.circle2} id="circle"></div>
            <div className={classes.circle2} id="circle1"></div>
            <div className={classes.circle2} id="circle2"></div>
            <div className={classes.circle2} id="circle3"></div>
            <div className={classes.circle2} id="circle4"></div>
          </div>

          <div id="aboutme" className={classes.main1}>
            <p>
              As a dedicated MERN stack developer with around a year of hands-on
              development experience, I’m passionate about creating efficient
              and user-friendly web applications. With 2-3 years of programming
              experience, I’ve honed my skills through various personal
              projects, freelancing work, and participation in college
              hackathons, where I love tackling real-world challenges. Currently
              pursuing a B.Tech in Computer Science Engineering with a focus on
              Core Computer Science, I’m excited to deepen my expertise and
              contribute to meaningful projects. Whether building intuitive
              interfaces or solving complex backend problems, I’m driven by a
              commitment to continuous learning and innovation.
            </p>
          </div>

          <div>
            <div className={classes.circle} id="circle"></div>
            <div className={classes.circle} id="circle1"></div>
            <div className={classes.circle} id="circle2"></div>
            <div className={classes.circle} id="circle3"></div>
            <div className={classes.circle} id="circle4"></div>
          </div>
          <div>
            <div className={classes.circle2} id="circle"></div>
            <div className={classes.circle2} id="circle1"></div>
            <div className={classes.circle2} id="circle2"></div>
            <div className={classes.circle2} id="circle3"></div>
            <div className={classes.circle2} id="circle4"></div>
          </div>
          <div className="margin"></div>
        </div>

        <About />
      </div>
    </>
  );
};

export default AboutMe;
