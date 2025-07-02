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
        width="296"
        height="296"
        viewBox="0 0 296 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="line1"
          ref={lineRef}
          cx="148"
          cy="148"
          r="144.917"
          fill=""
          stroke="#757575"
          stroke-width="6.16667"
        />
        <path
          d="M63.0455 194V100.909H85.5455V175.727H124.273V194H63.0455ZM155.74 194V100.909H178.24V140.273H179.468L210.24 100.909H236.74L203.74 142.455L237.331 194H210.422L187.24 157.409L178.24 168.773V194H155.74Z"
          fill="white"
          fill-opacity="0.9"
          ref={box}
          id="circle"
        />
      </svg>
    </div>
  );
};

export default Logo2;
