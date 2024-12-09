import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Logo2 from "./Logo2";

const Projects = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1600);
  }, []);

  return (
    <>
      {!render ? (
        <Logo2 />
      ) : (
        <div>
          <Navbar home={false} />
        </div>
      )}
    </>
  );
};

export default Projects;
