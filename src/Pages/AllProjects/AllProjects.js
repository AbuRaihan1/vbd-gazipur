import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import AllProjectsCard from "./AllProjectsCard";

const AllProjects = () => {
  const title = "Our Projects";
  const description =
    "This is our project page, here you can know more about our projects";

  const [allProjects, setAllProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("/featuresProjectsData.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setAllProjects(data.slice(startIndex, endIndex));
      });
  }, [currentPage]);

  console.log(allProjects);
  return (
    <div>
      <PageBanner title={title} description={description} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20 container mx-auto">
        {allProjects.map((project, idx) => (
          <AllProjectsCard project={project} key={idx} />
        ))}
      </div>
      <div className="pagination text-center flex items-center justify-center gap-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={
              currentPage === index + 1
                ? "bg-primary font-bold rounded-full h-12 w-12"
                : "bg-[#dad4d442] font-bold rounded-full h-12 w-12 border"
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
