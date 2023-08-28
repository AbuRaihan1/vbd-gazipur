import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import memberImg from "../../../src/assets/images/member.jpg";
import PageBanner from "../../components/PageBanner/PageBanner";
import MemberCards from "./MemberCards";

// import member images

import sohan from "../../../src/assets/images/sohan.jpg";
import akash from "../../../src/assets/images/akash.jpg";
import arman from "../../../src/assets/images/arman.jpg";
import bulbul from "../../../src/assets/images/bulbul.jpg";
import mojahid from "../../../src/assets/images/mojahid.jpg";
import abidSajib from "../../../src/assets/images/abidSajib.jpg";
import sojibJoy from "../../../src/assets/images/sojibJoy.jpg";
import sakibSojib from "../../../src/assets/images/sakibSojib.jpg";
import raihan from "../../../src/assets/images/raihan.jpg";
import nahid from "../../../src/assets/images/nahid.jpg";
import siam from "../../../src/assets/images/siam.jpg";
const Team = () => {
  const title = "Our Team";
  const description =
    "This is our team page, here you can know more about our team";

  const boardMember = [
    {
      img: sohan, // Empty string
      name: "Sohanur Rahman",
      title: "President",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: akash,
      name: "Mohammad Akash",
      title: "General Secretery",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: arman,
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
      img: bulbul,
      name: "Bulbul Ahmed",
      title: "Tresurer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: siam,
      name: "Siam Hossain",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    // ... other board members ...
  ];

  const committeeMember = [
    {
      img: raihan,
      name: "Abu Raihan",
      title: "Content writter",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: sojibJoy,
      name: "Sojib hasan joy",
      title: "Campus Ambassedor",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: abidSajib,
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
      img: nahid, // Empty string for female
      name: "Nahid Hossain",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: mojahid,
      name: "Md Mojahidul Islam",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    // ... other committee members ...
  ];

  const generalMember = [
    {
      img: sakibSojib,
      name: "Sakib Hasan Sojib",
      title: "Content writter",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: "", // Empty string for female
      name: "Tasmia Tithi",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "female",
    },
    {
      img: memberImg,
      name: "Ashraful Alam Tanvir",
      title: "Graphics Designer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: "", // Empty string for female
      name: "Afrin",
      title: "Human Resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "female",
    },
    {
      img: "", // Empty string for female
      name: "Ikhlas Hossain",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "male",
    },
    {
      img: "",
      name: "Tahsina Akter",
      title: "Human resource officer",
      socialLink: ["facebook", "twitter", "instagram", "linkedin"],
      gender: "female",
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
