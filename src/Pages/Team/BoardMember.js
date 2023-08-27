import React from "react";

const BoardMember = ({ member }) => {
  const { img, title, name } = member;
  return (
    <div className=" shadow-2xl  rounded-xl p-5 borde">
      <div className=" flex justify-center items-center">
        <img
          src={img}
          alt="memberImg"
          className="border h-20 w-20 rounded-full"
        />
      </div>
      <div>
        <h2>{name}</h2>
        {title}
      </div>
    </div>
  );
};

export default BoardMember;
