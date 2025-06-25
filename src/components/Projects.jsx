import classes from "./css/Projects.module.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Logo2 from "./Logo2";
import Project from "./Project";

const Projects = ({ size }) => {
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
          <Navbar home={false} size={size} />
          <div className={classes.main}>
            <div className={classes.freelance}>
              <span className={classes.span}>Freelance Projects</span>
              <Project
                projectName="therapistai"
                name="Vocal Haven"
                bgColor="black"
                textColor="white"
                desc="The AI-Powered Emotional Online Therapist is a web app offering emotional support through AI-driven voice and text interactions. It provides real-time empathetic responses and features a mental health dashboard to track emotional trends and offer personalized well-being tips. The platform ensures accessibility, privacy, and actionable insights for improved mental health."
                webLink="therapistai.netlify.app"
                tech="React.js, three js, gsap animations, Node.js, Express, MongoDB, OpenAI API, Whisper"
              />
              <Project
                projectName="justicepal"
                name="JusticePal"
                bgColor="black"
                textColor="white"
                desc="JusticePal is an AI-powered legal assistant that provides instant legal guidance using the OpenAI API. It helps users understand laws, legal procedures, and their rights through natural language interactions. The platform aims to make legal information accessible, reducing the need for costly consultations for basic queries."
                webLink="https://justicepal.netlify.app/"
                tech="React.js, OpenAI API"
              />
              <Project
                projectName="filetransfer"
                name="File Transfer"
                bgColor="black"
                textColor="white"
                desc="FileTransfer is a MERN stack-based file-sharing platform with secure IP authentication. It allows users to upload, share, and download files seamlessly while ensuring data security. The system verifies user IPs to prevent unauthorized access, making file transfers more controlled and private."
                webLink="https://filetransfer-frontend.netlify.app/"
                tech="React.js,  Node.js, Express, MongoDB, JWT, IP authentication, Multer (for file uploads)"
              />
            </div>
            <div className={classes.personal}>
            <span className={classes.span}>Personal Projects</span>

              <Project
                projectName="solarsystem"
                name="Solar System"
                bgColor="black"
                textColor="white"
                desc="Your Solar System project is an interactive 3D visualization built using Three.js. It showcases realistic planetary orbits, lighting effects, and smooth animations to simulate the motion of celestial bodies. Users can explore the solar system dynamically, making it both educational and visually engaging."
                webLink="https://akash-solarsystem.netlify.app/"
                tech="Three.js, React.js,  GSAP (for animations), WebGL, Three js"
              />

              <Project
                projectName="chatapp"
                name="Chat Loom"
                bgColor="black"
                textColor="white"
                desc="ChatLoom is a real-time chat application built with the MERN stack, offering seamless one-on-one and group messaging. It features user authentication, instant message delivery, and a modern UI for a smooth chatting experience. The app ensures secure communication with end-to-end encryption and real-time updates."
                webLink="therapistai.netlify.app"
                tech="React.js, Node.js, Express, MongoDB, Socket.IO, JWT, OAuth, WebSockets, End-to-End Encryption"
              />
           
           <span className={classes.span}>Hackathon</span>

           <Project
                projectName="farmersfirst"
                name="Farmers First"
                bgColor="black"
                textColor="white"
                desc="Farmers First is a platform created to empower farmers by enabling them to sell their products directly to customers, bypassing middlemen. The project includes features such as a one-on-one chat system for direct communication, a payment integration with Razorpay for secure transactions, and a product confirmation system to ensure the farmer gets paid after the customer picks up the product. It also supports voice input and multiple languages to help less-educated farmers, promoting fair pricing and eliminating barriers to market access."
                webLink="https://farmersfirst.netlify.app/"
                tech="React.js, Node.js, Express, MongoDB, Razorpay, Socket.IO (for real-time chat), WebSockets, OpenAI API (for voice input), JWT, OAuth, Vercel, AWS, Heroku."
              />

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
