import React from 'react';
import text from '../text_files/Semblance';
import TitleSection from '../components/TitleSection';
const About = () => {
  return (
    <div className="bg-neutral-900 rounded-md p-4 my-4">
      <TitleSection content="Semblanza" />

      <div className="text-start">
        {text.map((text, index) => (
          <div key={index} className="text-base mb-3">
            {text}
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;