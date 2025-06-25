import React from "react";
import classes from "./css/Home3.module.css";

const Home3 = () => {
  const arr1 = [
    "html.png",
    "css.png",
    "js.png",
    "react.png",
    "nodejs.png",
    "mongodb.webp",
  ];
  const arr2 = [
    "reactnative.png",
    "python.png",
    "cpp.png",
    "api.png",
    "github.png",
  ];

  return (
    <div>
      <div className={classes.border}></div>
      <div className={classes.skillcontainer}>
        <h1>My Skills</h1>
        <div className={classes.skill}>
          <p>The skills, tools and technologies i use:</p>
          <div className={classes.skills}>
            {arr1.map((e, i) => {
              return (
                <>
                  <div key={i} className={classes.imgcontainer}>
                    <img className={classes.skillsimg} src={`/Skills/${e}`} />
                  </div>
                  ;
                </>
              );
            })}
          </div>
          <div className={classes.skills}>
            {arr2.map((e, i) => {
              return (
                <>
                  <div key={i} className={classes.imgcontainer}>
                    <img className={classes.skillsimg} src={`/Skills/${e}`} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className={classes.projects}>
        <h1>My Projects</h1>
        <div className={classes.project}>
          <div className={classes.projectbg1}></div>
          <div className={classes.projectbg2}></div>
          <div className={classes.projectbg3}></div>
          <div className={classes.project1}>
          <div className={classes.bubble}></div>

            <div className={classes.projectnameleft}>
              <h2>Vocal Haven</h2>
              <p>Aug 2024</p>
            </div>
            <img src="/projects/therapistai/0.png" />
          </div>
          <div className={classes.midline}></div>
          <div className={classes.project2}>
            
            <div className={classes.projectnameright}>
              <h2>JusticePal</h2>
              <p>Apr 2024</p>
            </div>
            <img src="/projects/justicepal/0.png" />
          </div>
          <div className={classes.midline}></div>
          <div className={classes.project1}>
          <div className={classes.bubble}></div>

            <div className={classes.projectnameleft}>
              <h2>Farmers First</h2>
              <p>Sep 2024</p>
            </div>
            <img src="/projects/farmersfirst/0.png" />
          </div>
          <div className={classes.midline}></div>
          <div className={classes.project2}>

            <div className={classes.projectnameright}>
              <h2>Solar System</h2>
              <p>Dec 2024</p>
            </div>
            <img src="/projects/solarsystem/0.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;
