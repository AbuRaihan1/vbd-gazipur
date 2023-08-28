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
  }, []);
  
  return (
    <div>
      {/* <div>{title}</div> */} <p>details</p>
      <p> titel : {item.title}</p>
    </div>
  );
};

export default ProjectDetails;
