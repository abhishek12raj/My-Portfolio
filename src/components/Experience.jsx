import React from 'react';
import experience from './Data/experience.json';

function Experience() {
  return (
    <>
      <div className="container ex my-5">
        <h1 className="text-center mb-4">Experience</h1>
        {
          experience.map((data) => (
            <div key={data.id} className="ex-item my-4">
              <div className="ex-left">
                <img src={`/assets/${data.imageSrc}`} alt={data.role} className="img-fluid" />
              </div>
              <div className="ex-right">
                <h2>{data.role}</h2>
                <h4>{data.startDate} - {data.endDate} | {data.location}</h4>
                {data.experiences.map((exp, index) => (
                  <h5 key={index}>{exp}</h5>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Experience;
