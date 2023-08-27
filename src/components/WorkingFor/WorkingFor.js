import React, { useState } from "react";
import SdgGoalCard from "./SdgGoalCard";
const WorkingFor = () => {
  const sdgGoals = [
    {
      goalNumber: 1,
      title: "No Poverty",
      description:
        "End poverty in all its forms everywhere by 2030, ensuring all people have access to resources, basic services, and economic opportunities.",
    },
    {
      goalNumber: 2,
      title: "Zero Hunger",
      description:
        "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture to ensure that no one goes to bed hungry.",
    },
    {
      goalNumber: 3,
      title: "Good Health and Well-being",
      description:
        "Ensure healthy lives and promote well-being for all at all ages, addressing major health issues and providing access to quality healthcare services.",
    },
    {
      goalNumber: 4,
      title: "Quality Education",
      description:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all, fostering knowledge and skills needed to promote sustainable development.",
    },
    {
      goalNumber: 5,
      title: "Gender Equality",
      description:
        "Achieve gender equality and empower all women and girls, eliminating discrimination and violence and ensuring equal participation in all aspects of life.",
    },
    {
      goalNumber: 6,
      title: "Clean Water and Sanitation",
      description:
        "Ensure availability and sustainable management of water and sanitation for all, addressing water scarcity, pollution, and inadequate sanitation.",
    },
    {
      goalNumber: 7,
      title: "Affordable and Clean Energy",
      description:
        "Ensure access to affordable, reliable, sustainable, and modern energy for all, promoting renewable energy sources and efficient energy use.",
    },
    {
      goalNumber: 8,
      title: "Decent Work and Economic Growth",
      description:
        "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
    },
    {
      goalNumber: 9,
      title: "Industry, Innovation, and Infrastructure",
      description:
        "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation to support sustainable development.",
    },
    {
      goalNumber: 10,
      title: "Reduced Inequality",
      description:
        "Reduce inequality within and among countries, promoting social, economic, and political inclusion and equal opportunities for all.",
    },
    {
      goalNumber: 11,
      title: "Sustainable Cities and Communities",
      description:
        "Make cities and human settlements inclusive, safe, resilient, and sustainable, improving urban planning and management to accommodate growing populations.",
    },
    {
      goalNumber: 12,
      title: "Responsible Consumption and Production",
      description:
        "Ensure sustainable consumption and production patterns, promoting efficient resource use, sustainable lifestyles, and the reduction of waste and pollution.",
    },
    {
      goalNumber: 13,
      title: "Climate Action",
      description:
        "Take urgent action to combat climate change and its impacts, implementing policies and practices to reduce emissions and enhance resilience.",
    },
    {
      goalNumber: 14,
      title: "Life Below Water",
      description:
        "Conserve and sustainably use the oceans, seas, and marine resources, addressing pollution, overfishing, and acidification.",
    },
    {
      goalNumber: 15,
      title: "Life on Land",
      description:
        "Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests sustainably, combat desertification, and halt biodiversity loss.",
    },
    {
      goalNumber: 16,
      title: "Peace and Justice Strong Institutions",
      description:
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice, and build effective, accountable, and inclusive institutions.",
    },
    {
      goalNumber: 17,
      title: "Partnerships to achieve the Goal",
      description:
        "Strengthen global partnerships for sustainable development, mobilizing resources and expertise to support implementation of the SDGs in all countries.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [peopleToShow, setPeopleToShow] = useState(6);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
    // setPeopleToShow(8);
  };

  return (
    <div className=" my-20">
      <h2 className="text-center text-secondary font-bold lg:text-5xl text-3xl mb-16">
        We are work for
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto for_shadow_this">
        {sdgGoals
          .slice(0, showAll ? sdgGoals.length : peopleToShow)
          .map((goal, idx) => (
            <SdgGoalCard goal={goal} key={idx} />
          ))}

        {/*  */}
      </div>

      <div className="block text-center m-auto">
        {!showAll && (
          <button onClick={handleLoadMore} className="secondary-button mt-10">
            Load more
          </button>
        )}

        {showAll && (
          <button onClick={handleSeeLess} className="secondary-button mt-10">
            See less
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkingFor;
