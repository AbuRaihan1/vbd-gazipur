import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";

const Team = () => {
  const title = "Our Team";
  const description =
    "This is our team page, here you can know more about our team";
  return (
    <div>
      <PageBanner title={title} description={description} />
      <div className="text-2xl">team</div>
    </div>
  );
};

export default Team;
