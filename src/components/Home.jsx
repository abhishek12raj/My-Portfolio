import React, { useEffect, useRef } from "react";
import pdf from '../pdf/MY_RESUME.pdf';
import hero from './Data/hero.json';
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Welcome to my Profile", "My name is ABHISHEK RAJ", "I'm a Full Stack Developer", "I'm a Student"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home">
        <div className="content">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right mx-2">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
