import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultProjet from "../../../src/assets/images/projectImg.jpg";
import { useNavigate } from "react-router-dom";
const ProjectDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("/featuresProjectsData.json").then((res) =>
      res.json().then((data) => {
        const items = data.find((d) => d.id === Number(params.id));
        setItem(items);
      })
    );
  }, [params.id]);

  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  const { title, description, img1, img2, img3 } = item;
  return (
    <div>
      <div className=" mt-10 ml-7">
        <button
          onClick={handleGoBack}
          className="rounded-full border-secondary border-2 px-7 py-2 font-bold text-xl hover:bg-secondary hover:text-white"
        >
          Back
        </button>
      </div>
      <div
        className="container mx-auto shadow-2xl rounded-xl p-5 my-20 mt-10"
        data-aos="fade-up"
      >
        <div className="grid gap-6">
          <div className="grid lg:grid-cols-2 gap-6 ">
            {" "}
            <img
              src={img1 ? img1 : defaultProjet}
              alt="img"
              className="rounded-2xl lg:h-[624px] border"
            />
            <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-5">
              <img
                src={img2 ? img2 : defaultProjet}
                alt="img"
                className="rounded-2xl lg:h-[300px] w-full border"
              />
              <img
                src={img3 ? img3 : defaultProjet}
                alt="img"
                className="rounded-2xl lg:h-[300px] w-full border"
              />
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-secondary font-bold lg:text-5xl text-3xl text-center">
              {title}
            </h2>
            <p className="font-semibold mt-5 text-lg text-justify">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
