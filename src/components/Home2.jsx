import React from "react";
import classes from "./css/Home2.module.css";
import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";

const Home2 = () => {
  const dots = Array.from({ length: 72 });

  return (
    <div className={classes.main}>
      <div className={classes.services}>
        <div className={classes.service}>
          <h1>My Services</h1>
          <div className={classes.serviceMain}>
            <div className={classes.service1}>
              <h2>
                <FaLaptopCode
                  style={{
                    margin: "auto",
                    padding: "0 1rem",
                    color: "#3232a4",
                  }}
                />{" "}
                Website Development
              </h2>
              <p>
                I create websites based on your ready-made design. Whether it's
                a landing page or a bussiness card website, I will make it look
                great and work smoothly on any device.
              </p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.service2}>
              <h2>
                <FaMobileAlt
                  style={{
                    margin: "auto",
                    padding: "0 1rem",
                    color: "#3232a4",
                  }}
                />{" "}
                Mobile Development
              </h2>
              <p>
                I can create mobile applications from scratch for both Android
                and IOS. I can create modern, simple and user-friendly
                applications that match your brand and goals.
              </p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.service1}>
              <h2>
                <FaServer
                  style={{
                    margin: "auto",
                    padding: "0 1rem",
                    color: "#3232a4",
                  }}
                />{" "}
                Backend Development
              </h2>
              <p>
                I build robust and scalable backend systems that power seamless
                user experiences and secure data flow. From API development to
                database design, I ensure your application runs smoothly behind
                the scenes.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.aboutme}>
        <div className={classes.about}>
          <div className={classes.bubble}></div>
          <div className={classes.abouttext}>About Me</div>

          <div className={classes.aboutimg}></div>
          <div className={classes.aboutdetail}>
            <p>
              I'm a MERN stack developer with 1 year of hands-on experience and
              2–3 years of programming background. I’ve built full-stack web and
              mobile apps through personal projects, freelancing, and college
              hackathons. Currently pursuing a B.Tech in CSE, I’m passionate
              about solving real-world problems, from intuitive UIs to complex
              backend systems, with a focus on continuous learning and
              innovation.
            </p>

            <button className={classes.contactbtn}>Contact Me</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home2;
