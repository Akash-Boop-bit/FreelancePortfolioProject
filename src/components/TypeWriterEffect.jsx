import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import classes from "./css/TypeWriterEffect.module.css";

gsap.registerPlugin(useGSAP, TextPlugin);

const TypeWriterEffect = () => {
  const words = [" learning", " building", " solving problems", " creating solutions", " improving", " growing", " collaborating", " innovating"];
  const container = useRef();

  useGSAP(
    () => {
      let mainTimeline = gsap.timeline({
        repeat: -1,
      });
      words.forEach((word) => {
        let textTimeline = gsap.timeline({
          repeat: 1,
          repeatDelay: 4,
          yoyo: true,
        });
        textTimeline.to("#first", {
          text: word,
          duration: 1,
          onUpdate: () => {
            cursorTimeline.restart();
            cursorTimeline.pause();
          },
          onComplete: () => {
            cursorTimeline.play();
          },
        });
        mainTimeline.add(textTimeline);
      });

      let cursorTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
      });

      cursorTimeline
        .to("#second", {
          opacity: 1,
          duration: 0,
        })
        .to("#second", {
          opacity: 0,
          duration: 0,
          delay: 0.8,
        });
    },
    { scope: container }
  );

  return (
    <div className={classes.main} ref={container}>
      <h1>
      I am passionate about 
        <span id="first" className={classes.first}></span>
        <span id="second" className={classes.second}>
          {" "}
          |{" "}
        </span>
      </h1>
    </div>
  );
};

export default TypeWriterEffect;
