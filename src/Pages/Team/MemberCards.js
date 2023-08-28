import React from "react";
import "../../FAQ/faq.css";
import femaleAvatar from "../../../src/assets/images/femaleAvatar.jpg";
import maleAvatar from "../../../src/assets/images/maleAvatar.png";
const MemberCards = ({ member }) => {
  const { img, title, name, gender } = member;
  const avatarImg = gender === "female" ? femaleAvatar : maleAvatar;
  const memberImgSrc = img || avatarImg;
  return (
    <div className="">
      <div
        className="rounded-xl p-5 px-7 border "
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className=" flex gap-5 items-center">
          <img
            src={memberImgSrc}
            alt="memberImg"
            className="border-4 border-secondary h-20 w-20 rounded-full"
          />
          <div className="">
            <h2 className="text-2xl  font-bold text-secondary">{name}</h2>
            <p className=" text-[#7e7a7a] font-semibold text-lg"> {title}</p>
          </div>
        </div>

        <p className="text-justify font-semibold mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptates corporis accusantium alias voluptatum iste aperiam, dolore
          iusto animi beatae.
        </p>
      </div>
    </div>
  );
};

export default MemberCards;
