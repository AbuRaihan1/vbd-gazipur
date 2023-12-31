import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import AllProjectsCard from "./AllProjectsCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import projectBanner from "../../../src/assets/images/project_Banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Loader = () => {
  return <div className="loader text-2xl font-bold">Projects Loading...</div>;
};

const AllProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const title = "Our Projects";
  const description =
    "Since creating our teams, we have completed numerous projects, and we are currently working on a new project. Day by day, we are contemplating how we can make a positive impact on our society through our projects.";

  const [allProjects, setAllProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    fetch("/featuresProjectsData.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setAllProjects(data.slice(startIndex, endIndex));
        setIsLoading(false); // Set loading state to false when data is loaded
      });
  }, [currentPage]);

  return (
    <div className="mb-16">
      <PageBanner title={title} img={projectBanner} description={description} />

      <h2 className="lg:text-5xl text-3xl font-bold text-secondary text-center my-16">
        All Projects
      </h2>

      {isLoading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 mb-20 container mx-auto">
          {allProjects.map((project, idx) => (
            <AllProjectsCard project={project} key={idx} />
          ))}
        </div>
      )}

      {allProjects ? (
        <div className="pagination text-center flex items-center justify-center gap-5">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed "
                : " hover:bg-secondary bg-[#dad4d442] duration-150"
            } px-4 py-2 border rounded-full h-12 text-white w-12`}
          >
            <GrPrevious />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1
                  ? "bg-primary font-bold rounded-full h-12 w-12"
                  : "bg-[#f3efef42] font-bold rounded-full h-12 w-12 border hover:bg-primary duration-150 hover:border-primary"
              }
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed "
                : " hover-bg-secondary duration-150 bg-[#dad4d442]"
            } px-4 py-2 border rounded-full h-12 text-white w-12`}
          >
            <GrNext />
          </button>
        </div>
      ) : (
        "No Projects Available"
      )}
    </div>
  );
};

export default AllProjects;
