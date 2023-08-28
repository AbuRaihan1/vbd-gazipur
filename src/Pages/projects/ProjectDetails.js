import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
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

  const { title, description, img } = item;
  console.log(img);
  return (
    <div className="container mx-auto shadow-2xl rounded-xl p-5 my-20">
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          {" "}
          <img src={img} alt="img" className="rounded-2xl" />
        </div>
        <div>
          <h2 className="text-secondary font-bold lg:text-5xl text-3xl text-center">
            {title}
          </h2>
          <p className="font-semibold mt-5 text-lg text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
