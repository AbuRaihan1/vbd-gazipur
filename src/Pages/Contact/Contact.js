import React from "react";
import BannerSlider from "../../components/Banner/BannerSlider";
import PageBanner from "../../components/PageBanner/PageBanner";

const Contact = () => {
  const title = "Contact Us";
  const description =
    "This is our contact page, you can know about our contact and any other information from here";
  return (
    <div>
      <PageBanner title={title} description={description} />
      <div className="text-2xl">contact</div>
    </div>
  );
};

export default Contact;
