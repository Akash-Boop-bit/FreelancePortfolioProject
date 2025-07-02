import React, { useEffect, useRef, useState } from "react";
import classes from "./css/Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Project = ({
  projectName,
  name,
  bgColor,
  desc,
  textColor,
  webLink,
  tech,
}) => {
  const [num, setNum] = useState(0);
  const { contextSafe } = useGSAP();

  const imgRef = useRef(null);

  const imgAnimation = contextSafe(() => {
    gsap.set(imgRef.current, {
      x: 100,
      opacity: 0,
    });
    gsap.to(imgRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
    });
  });

  const btnHandler = (mode) => {
    if (mode == 1) {
      if (num == 4) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
    } else {
      if (num == 0) {
        setNum(4);
      } else {
        setNum(num - 1);
      }
    }
    imgAnimation();
    return;
  };

  return (
    <>
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className={classes.main}
      >
        <div className={classes.imagegallery}>
          <button onClick={() => btnHandler(-1)} className={classes.btnleft}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "yellow", background: "none", height: "50px" }}
            />{" "}
          </button>
          <img
            id="image"
            ref={imgRef}
            src={`/projects/${projectName}/${num}.png`}
            alt="image"
          />
          <button onClick={() => btnHandler(1)} className={classes.btnright}>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "yellow", background: "none", height: "50px" }}
            />
          </button>
        </div>
        <div
          className={classes.infodiv}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <h1>{name}</h1>
          <div className={classes.infodesc}>{desc}</div>
          <div className={classes.infotech}>
            <span>Technologies Used : </span> {tech}
          </div>
          <div className={classes.infolink}>
            <a className={classes.buttonlink} href={webLink} target="_blank">
              Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
