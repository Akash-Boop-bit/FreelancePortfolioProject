import React, { useEffect, useRef, useState } from "react";
import classes from "./css/About.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = ({ size }) => {
  const [mainarr, setMainarr] = useState([
    ["react.png"],
    ["node.webp"],
    ["mongo.png"],
    ["reactnative.svg"],
  ]);
  const [btnnum, setBtnnum] = useState(1);
  const boxref = useRef();
  const galleryref = useRef();

  useEffect(() => {
    let arr = document.getElementsByName("btn");
    arr.forEach((ele) => {
      ele.style.backgroundColor = "white";
    });
    switch (btnnum) {
      case 1:
        document.getElementById("btn1").style.backgroundColor = "black";
        break;
      case 2:
        document.getElementById("btn2").style.backgroundColor = "black";
        break;
      case 3:
        document.getElementById("btn3").style.backgroundColor = "black";
        break;
      case 4:
        document.getElementById("btn4").style.backgroundColor = "black";
        break;
      case 5:
        document.getElementById("btn5").style.backgroundColor = "black";
        break;
      case 6:
          document.getElementById("btn6").style.backgroundColor = "black";
          break;
      default:
        break;
    }
  }, [btnnum]);

  useGSAP(
    () => {
      let tl = gsap.timeline({});
      if (size) {
        gsap.to(boxref.current, {
          duration: 1,
          backgroundColor: "black",
          scrollTrigger: {
            trigger: boxref.current,
          },
        });
      }
    },
    { scope: "#boxs" }
  );

  const btnsHandler = (n) => {
    let arr = [
      ["react.png"],
      ["node.webp"],
      ["mongo.png"],
      ["reactnative.svg"],
      ["c++.png"],
      ["python.png"],
      ["js.avif"],
      ["html.jpg"],
      ["css.png"],
    ];
    let newarr;
    gsap.to(galleryref.current, {
      opacity: 0,
      duration: 1,
      x: -100,
    });
    gsap.set(galleryref.current, {
      opacity: 0,
      x: 100,
    });
    switch (n) {
      case 1:
        newarr = arr.slice(0, 4);
        break;
      case 2:
        newarr = arr.slice(1, 5);
        break;
      case 3:
        newarr = arr.slice(2, 6);
        break;
      case 4:
        newarr = arr.slice(3, 7);
        break;
      case 5:
        newarr = arr.slice(4, 8);
        break;
      case 6:
        newarr = arr.slice(5, 9);
        break;
      default:
        break;
    }
    setMainarr(newarr);
    setBtnnum(n);
    gsap.to(galleryref.current, {
      duration: 1,
      opacity: 1,
      x: 0,
    });
  };

  return (
    <>
      <div id="boxs">
        <div
          style={
            !size ? { backgroundColor: "black" } : { backgroundColor: "white" }
          }
          ref={boxref}
          className={classes.main}
        >
          <span>Skills</span>
          <div className={classes.gallerycontainer}>
            <div ref={galleryref} className={classes.gallery}>
              {mainarr.map((ele, i) => {
                return (
                  <div key={i} className={classes.card}>
                    <img src={`/images/${ele[0]}`} alt="" />
                  </div>
                );
              })}
            </div>
            <div className={classes.btns}>
              <button
                className={classes.btn}
                onClick={() => btnsHandler(1)}
                id="btn1"
                name="btn"
              ></button>
              <button
                className={classes.btn}
                onClick={() => btnsHandler(2)}
                id="btn2"
                name="btn"
              ></button>
              <button
                className={classes.btn}
                onClick={() => btnsHandler(3)}
                id="btn3"
                name="btn"
              ></button>
              <button
                className={classes.btn}
                onClick={() => btnsHandler(4)}
                id="btn4"
                name="btn"
              ></button>
              <button
                className={classes.btn}
                onClick={() => btnsHandler(5)}
                id="btn5"
                name="btn"
              ></button>
              <button
                className={classes.btn}
                onClick={() => btnsHandler(6)}
                id="btn6"
                name="btn"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
