import React from 'react';
import skills from './Data/skills.json';

function Skills() {
  return (
    <>
      <div className="container skills my-5">
        <h1 className="text-center mb-4">SKILLS</h1>
        <div className="items d-flex justify-content-center align-items-center flex-wrap">
          {skills.map((pic) => (
            <div className="item text-center mx-3 my-3" key={pic.id}>
              <img src={`/assets/${pic.imageSrc}`} alt={pic.title} className="img-fluid mb-3" />
              <h3>{pic.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
