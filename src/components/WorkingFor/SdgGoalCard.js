import React from "react";

const SdgGoalCard = ({ goal }) => {
  const { goalNumber, title, description } = goal;
  return (
    <div>
      <div className="border border-[#104b20af] rounded-lg shadow-2xl hover:scale-95 duration-300 p-4 min-h-[300px] lg:mx-0 mx-4">
        <div className="text-center flex justify-end">
          <h2 className="text-center bg-[#134d22] rounded-full font-bold text-5xl text-primary  h-20 w-20 flex items-center justify-center  mb-4">
            {goalNumber}
          </h2>
        </div>
        <h3 className="text-secondary font-bold text-3xl">{title}</h3>
        <p className="text-black font-semibold text-justify mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SdgGoalCard;
