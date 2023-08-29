import React from "react";

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
      number: "47",
      text: "Completed Project",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center lg:text-5xl text-3xl font-bold text-secondary">
        <h2>Statistics</h2>
      </div>

      <div
        className="grid lg:grid-cols-4 bg-[#FBC807] my-20 justify-center items-center shadow-2xl"
        data-aos="fade-up"
      >
        {Statistics.map((stData, idx) => {
          return (
            <div key={idx}>
              <div className="flex justify-center items-center flex-col mb-12 pt-12">
                <h2 className="text-5xl font-bold text-secondary">
                  {stData.number}
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
