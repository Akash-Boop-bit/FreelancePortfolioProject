import React, { useRef } from "react";
import classes from "./css/Logo2.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Logo2 = () => {
  const box = useRef(null);
  const container = useRef();
  const lineRef = useRef(null);
  const lineRef2 = useRef(null);

  useGSAP(() => {
    gsap.set(
      box.current,
      {
        scale: 0,
        transformOrigin: "50% 50%",
      },
      0
    );
    gsap.set(lineRef.current, {
      strokeDasharray: lineRef.current.getTotalLength(),
      strokeDashoffset: lineRef.current.getTotalLength(),
      opacity: 0,
    });
    let tl = gsap.timeline({});

    tl.to(box.current, {
      scale: 1,
      rotation: 360,
      duration: 1,
      ease: "power4.inOut",
    });

    tl.to(
      "#line1",
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power4.inOut",
        opacity: 1,
      },
      0
    );

    tl.to(
      "#line1,  #circle",
      {
        stroke: "aqua",
        strokeWidth: 5,
        duration: 0.4,
      },
      1
    );
  });

  return (
    <div className={classes.main}>
      <svg
        width="316"
        height="302"
        viewBox="0 0 316 302"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M158 276.833C230.718 276.833 289.667 220.496 289.667 151C289.667 81.5042 230.718 25.1667 158 25.1667C85.2825 25.1667 26.3333 81.5042 26.3333 151C26.3333 220.496 85.2825 276.833 158 276.833Z"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="line1"
          ref={lineRef}
        />
        <path
          ref={box}
          id="circle"
          d="M85.1648 186H69.3466L93.4489 116.182H112.472L136.54 186H120.722L103.233 132.136H102.688L85.1648 186ZM84.1761 158.557H121.54V170.08H84.1761V158.557ZM167.162 116.182H185.366L204.594 163.091H205.412L224.639 116.182H242.844V186H228.526V140.557H227.946L209.878 185.659H200.128L182.06 140.386H181.48V186H167.162V116.182Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Logo2;
