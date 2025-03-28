import React from 'react';
import text from '../text_files/Semblance';
import TitleSection from '../components/TitleSection';
const About = () => {
  return (
    <>
      <div className=" mt-8 grid lg:px-0 px-4 gap-4">
        <div>
          <TitleSection content="Semblanza" />
        </div>
        <div className="bg-inst-card rounded-md p-4">

          <div className="text-start">
            {text.map((text, index) => (
              <div key={index} className="md:text-base text-sm mb-3">
                {text}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default About;