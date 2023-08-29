import React, { useState } from "react";
import CountUp from "react-countup";
// const VisibilitySensor = require("react-visibility-sensor");
import VisibilitySensor from "react-visibility-sensor";
import ScrollTrigger from "react-scroll-trigger";
const Statistics = () => {
  const Statistics = [
    {
      number: "47",
      text: "Completed Project",
    },

    {
      number: "54",
      text: "Team Members",
    },
    {
      number: "01",
      text: "Upazila Team",
    },
    {
      number: "24",
      text: "Training",
    },
  ];

  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="text-center lg:text-5xl text-3xl font-bold text-secondary">
        <h2>Statistics</h2>
      </div>

      <div
        className="grid lg:grid-cols-4 bg-[#FBC807] mt-10 mb-20 justify-center items-center shadow-2xl"
        data-aos="fade-up"
      >
        {Statistics.map((stData, idx) => {
          return (
            <div key={idx}>
              <div className="flex justify-center items-center flex-col mb-12 pt-12">
                <h2 className="text-5xl font-bold text-secondary">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && <CountUp end={stData.number} duration={4} />}
                  </ScrollTrigger>
                </h2>
                <h2 className="font-bold mt-5 text-2xl">{stData.text}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
