import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import memberImg from "../../../src/assets/images/member.jpg";
import PageBanner from "../../components/PageBanner/PageBanner";
import MemberCards from "./MemberCards";
const Team = () => {
  const title = "Our Team";
  const description =
    "This is our team page, here you can know more about our team";

  const boardMember = [
    {
      img: "", // Empty string
      name: "Sohanur Rahman",
      title: "President",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: memberImg,
      name: "Mohammad Akash",
      title: "General Secretery",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: memberImg,
      name: "Arman Hasan",
      title: "Public relations officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: "", // Empty string for female
      name: "Sonia Akter",
      title: "Public relations officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "female",
    },
    {
      img: memberImg,
      name: "Bulbul Ahmed",
      title: "Tresurer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: memberImg,
      name: "Siam Hossain",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    // ... other board members ...
  ];

  const committeeMember = [
    {
      img: memberImg,
      name: "Abu Raihan",
      title: "Content writter",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: memberImg,
      name: "Sojib hasan joy",
      title: "Campus Ambassedor",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: memberImg,
      name: "Abid hasan Sajib",
      title: "Graphics Designer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: "", // Empty string for female
      name: "Sabina Saba",
      title: "Human Resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "female",
    },
    {
      img: "", // Empty string for female
      name: "Tasmisa Tithi",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "female",
    },
    {
      img: memberImg,
      name: "Md Mojahidul Islam",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    // ... other committee members ...
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
                  <MemberCards member={member} key={idx} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {committeeMember.map((member, idx) => (
                  <MemberCards member={member} key={idx} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {generalMember.map((member, idx) => (
                  <MemberCards member={member} key={idx} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Team;
