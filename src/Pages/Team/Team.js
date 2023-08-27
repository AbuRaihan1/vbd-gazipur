import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import memberImg from "../../../src/assets/images/member.jpg";
import BoardMember from "./BoardMember";
const Team = () => {
  const title = "Our Team";
  const description =
    "This is our team page, here you can know more about our team";

  const boardMember = [
    {
      img: memberImg,
      name: "Sohanur Rahman",
      title: "President",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Mohammad Akash",
      title: "General Secretery",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Arman Hasan",
      title: "Public relations officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Bulbul Ahmed",
      title: "Tresurer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Siam Hossain",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
  ];

  const committeeMember = [
    {
      img: memberImg,
      name: "Abu Raihan",
      title: "Content writter",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Nahid Hossain",
      title: "Campus Ambassedor",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Ikhlas Hossain",
      title: "Graphics Designer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Tanzila trisha",
      title: "Human Resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Tasmisa Tithi",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
  ];

  const generalMember = [
    {
      img: memberImg,
      name: "Abu Raihan",
      title: "Content writter",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Nahid Hossain",
      title: "Campus Ambassedor",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Ikhlas Hossain",
      title: "Graphics Designer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Tanzila trisha",
      title: "Human Resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      img: memberImg,
      name: "Tasmisa Tithi",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
    },
  ];
  return (
    <div>
      <PageBanner title={title} description={description} />
      <div>
        <div className="my-20 container mx-auto">
          <Tabs>
            <div className="flex justify-center items-center ">
              <TabList>
                <Tab>Board Member</Tab>
                <Tab>committee Member</Tab>
                <Tab>General Member</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {boardMember.map((member, idx) => (
                  <BoardMember member={member} key={idx} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Committee member</h2>
            </TabPanel>
            <TabPanel>
              <h2>general member</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Team;
